const Category = require("../models/Category");
const enums = require("../enums");

class CategoryController {
  async salvarCategoria(req, res) {
    try {
      const { title } = req.body;

      const category = await Category.create({ title });

      res.status(enums.statusCode.success).send(category);
    } catch (e) {
      res.status(enums.statusCode.internalError).send({ message: e.message });
    }
  }
}

module.exports = new CategoryController();
