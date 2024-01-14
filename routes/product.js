const router = require("express").Router();
const productController = require("../controllers/productController");

router.post("/", productController.createProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
