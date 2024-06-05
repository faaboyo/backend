const router = require("express").Router();

const proveedorController = require("../controllers/proveedor.controller");

router.get(
  "/",
  proveedorController.getProveedores
);
router.get(
  "/:id",
  proveedorController.getProveedor
);
router.post(
  "/",
  proveedorController.createProveedor
);
router.put(
  "/:id",
  proveedorController.updateProveedor
);
router.delete(
  "/:id",
  proveedorController.deleteProveedor
);

module.exports = router;
