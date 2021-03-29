import { IRequestResponse } from 'global';
import { v4 as uuid } from 'uuid';
import knex from '../database';

/**
 * Implements creation of users
 * @param request - Request Type from framework
 * @param response - Response Type from framework
 * @returns
 */
async function createNewUser(request: IRequestResponse['request'], response: IRequestResponse['response']):Promise<any> {
  console.log('index');
  const trx = await knex.transaction();
  try {
    const body = request?.body;

    const userExists = await knex('users')
      .select('*')
      .where('email', body.email)
      .first()
      .transacting(trx);

    if (userExists) {
      throw new Error('User already exists');
    }

    await knex('users')
      .insert({
        user_id: uuid(),
        email: body.email,
        givenName: body.givenName,
        familyName: body.familyName,
        isActived: 1,
        password: 123456,
        fiscalNumber: 123454678,
      })
      .transacting(trx);

    await trx.commit();

    return response?.status(201).send({
      message: 'User created with success',
    });
  } catch (error) {
    await trx.rollback();
    return response?.status(500).send({
      message: error.message,
    });
  }
}

export {
  createNewUser,
};
