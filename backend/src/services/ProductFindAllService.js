class ProductFindAllService {
  constructor(productRepository) {
    this.productRepository = productRepository
  }

  async execute() {
    const products = await this.productRepository.findAll();
    return products;
  }
}

module.exports = ProductFindAllService;