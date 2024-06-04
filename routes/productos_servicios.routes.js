const router = require("express").Router();
const productosServiciosController = require("../controllers/productos_servicios.controller");

router.get("/", productosServiciosController.getProductosServicios);
router.get("/:id", productosServiciosController.getProductoServicio);
router.post("/", productosServiciosController.createProductoServicio);
router.put("/:id", productosServiciosController.updateProductoServicio);
router.delete("/:id", productosServiciosController.deleteProductoServicio);

module.exports = router;
