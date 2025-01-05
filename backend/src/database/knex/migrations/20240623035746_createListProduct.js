exports.up = knex => knex.schema.createTable("products", table => {
  table.increments("id");
  table.text("name");
  table.text("description");
  table.decimal('price', 10, 2);
});


exports.down = knex => knex.schema.dropTable("products");