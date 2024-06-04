const router = require("express").Router();

const eventoController = require("../controllers/evento.controller");

router.get(
  "/",
  eventoController.getEventos
);
router.get(
  "/:id",
  eventoController.getEvento
);
router.post(
  "/",
  eventoController.createEvento
);
router.put(
  "/:id",
  eventoController.updateEvento
);
router.delete(
  "/:id",
  eventoController.deleteEvento
);

module.exports = router;
