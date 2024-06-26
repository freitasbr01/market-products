const ProductRepository = require('../repositorie/ProductRepository');
const ProductCreateService = require('../services/ProductCreateService');
const ProductFindAllService = require('../services/ProductFindAllService');


class ProductsController {
  async create(request, response) {
    const { name, description, price } = request.body;

    const productRepository = new ProductRepository();
    const productCreateService = new ProductCreateService(productRepository);
    await productCreateService.execute({ name, description, price });

    return response.json()
  };

  async index(request, response) {
    const productRepository = new ProductRepository();
    const productFindAllService = new ProductFindAllService(productRepository)
    const products = await productFindAllService.execute();

    return response.json(products);
  }  
}

module.exports = ProductsController;