const Product = require("../models/Products");

module.exports = {
  createProduct: async (req, res) => {
    const { productName } = req.body;

    try {
      if (!productName) {
        return res.status(400).json({ error: "ürün ismi zorunlu" });
      }

      const newProduct = new Product({
        productName,
      });

      await newProduct.save();
      res.status(200).json("Ürün başarıyla oluşturuldu");
    } catch (error) {
      console.error("Ürün oluşturma hatası:", error);
      res.status(500).json({
        message: "Ürün oluşturulurken bir hata oluştu",
        error: error.message,
      });
    }
  },

  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ürün oluşturulurken bir hata oluştu", error: error.message });
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json("Ürün bulunamadı");
      }

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json("Ürün getirme işlemi başarısız oldu");
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json("Ürün bulunamadı");
      }
      res.status(200).json("Ürün silindi");
    } catch (error) {
      res.status(500).json({
        message: "Ürün silme işlemi başarısız oldu",
        error: error.message,
      });
    }
  },
};
