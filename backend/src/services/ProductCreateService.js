class ProductCreateService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute({ name, description, price }) {
    const productCreated = await this.productRepository.create({ name, description, price });
  }
}

module.exports = ProductCreateService;