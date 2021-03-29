import { IRequestResponse } from 'global';
import { v4 as uuid } from 'uuid';
import {
  multiply, subtract,

} from 'mathjs';
import knex from '../database';

async function PostCart(
  req:IRequestResponse['request'],
  res: IRequestResponse['response'],
) {
  const trx = await knex.transaction();
  try {
    const {
      user_id,
      products = [],
      promotions = [],
    } = req.body;

    const userExists = await knex('users')
      .where('user_id', user_id)
      .first()
      .transacting(trx);

    const cartExists = await knex('carts')
      .where({
        user_id,
        isActived: 1,
      })
      .first()
      .transacting(trx);

    if (!userExists) {
      throw new Error('User not exists');
    }

    const cartId = uuid();

    if (!cartExists) {
      await knex('carts')
        .insert({
          cart_id: cartId,
          isActived: true,
          user_id,
        })
        .transacting(trx);
    }

    for (let i = 0; i < products.length; i++) {
      const priceWithDiscount = (
        subtract(multiply(products[i].product_unity_price, products[i].quantity),
          subtract(
            multiply(products[i].product_unity_price, products[i].quantity),
            products[i].product_discount,
          )));

      await knex('cart_products')
        .insert({
          cart_product_id: uuid(),
          product_id: products[i].product_id,
          product_unity_price: products[i].product_unity_price,
          product_quantity: products[i].quantity,
          product_discount: products[i].product_discount,
          product_total: priceWithDiscount,
          cart_id: cartExists || cartId,
        })
        .transacting(trx);
    }

    await trx.commit();
    res.status(200).send();
  } catch (error) {
    await trx.rollback();
    return res.status(500).send({
      message: error.message,
    });
  }
}

async function fetchCart(
  req:IRequestResponse['request'],
  res: IRequestResponse['response'],
) {
  try {

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
}

async function changeQuantityCart(
  req:IRequestResponse['request'],
  res: IRequestResponse['response'],
) {
  try {

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
}

export {
  PostCart,
  fetchCart,
  changeQuantityCart,
};
