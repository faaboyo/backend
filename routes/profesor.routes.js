const router = require("express").Router();

const profesorController = require("../controllers/profesor.controller");

router.get(
  "/",
  profesorController.getProfesores
);
router.get(
  "/:id",
  profesorController.getProfesor
);
router.post(
  "/",
  profesorController.createProfesor
);
router.put(
  "/:id",
  profesorController.updateProfesor
);
router.delete(
  "/:id",
  profesorController.deleteProfesor
);

module.exports = router;
