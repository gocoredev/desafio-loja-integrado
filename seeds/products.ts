import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { 
            product_id: 1, 
            product_name: "TV 12' Samsung", 
            product_stock: 12, 
            product_description: 'Televisão com conversor digital para veiculos', 
            product_brand: 'Samsung', 
            product_unity_price: 18.2 
        },
        { 
            product_id: 2, 
            product_name: "Vídeo Game Samsung", 
            product_stock: 12, 
            product_description: 'Video game com conversor digital para veiculos', 
            product_brand: 'Samsung', 
            product_unity_price: 702.2 
        },
        { 
            product_id: 3, 
            product_name: "Radio Samsung", 
            product_stock: 12, 
            product_description: 'Video game com conversor digital para veiculos', 
            product_brand: 'Samsung', 
            product_unity_price: 89.2 
        },
    ]);
};
