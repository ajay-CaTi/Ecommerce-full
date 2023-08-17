const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetils,
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router
  .route("/products/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetils);

module.exports = router;
