const knex = require("../database/knex")

class ProductRepository {
  async create({ name, description, price }) {

    await knex("products").insert({
      name,
      description,
      price
    });
  }

  async findAll() {
    const products = await knex("products")
    .select("name", "description", "price")
    .orderBy("price", "asc") 

    return products;
  }
}

module.exports = ProductRepository;

