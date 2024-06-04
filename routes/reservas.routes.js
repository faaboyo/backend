const router = require("express").Router();

const reservasController = require("../controllers/reservas.controller");

router.get(
  "/",
  reservasController.getReservas
);
router.get(
  "/:id",
  reservasController.getReserva
);
router.post(
  "/",
  reservasController.createReserva
);
router.put(
  "/:id",
  reservasController.updateReserva
);
router.delete(
  "/:id",
  reservasController.deleteReserva
);

module.exports = router;
