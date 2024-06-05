const router = require("express").Router();
const productoController = require("../controllers/producto.controller");

router.get("/", productoController.getProductos);
router.get("/:id", productoController.getProducto);
router.post("/", productoController.createProducto);
router.put("/:id", productoController.updateProducto);
router.delete("/:id", productoController.deleteProducto);

module.exports = router;
