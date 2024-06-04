const router = require("express").Router();

const v1 = "v1";

router.use(`/${v1}/Eventos`, require("./evento.routes"));
router.use(`/${v1}/productosServicios`, require("./productosServicios.routes"));
router.use(`/${v1}/proveedores`, require("./proveedores.routes"));
router.use(`/${v1}/reservas`, require("./reservas.routes"));
router.use(`/${v1}/users`, require("./user.routes"));

router.get("/", (req, res) => {
    res.send("Servidor en funcionamiento");
  });


module.exports = router;

