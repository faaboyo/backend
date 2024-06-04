const router = require("express").Router();

const eventosController = require("../controllers/eventos.controller");

router.get(
  "/",
  eventosController.getEventos
);
router.get(
  "/:id",
  eventosController.getEvento
);
router.post(
  "/",
  eventosController.createEvento
);
router.put(
  "/:id",
  eventosController.updateEvento
);
router.delete(
  "/:id",
  eventosController.deleteEvento
);

module.exports = router;
