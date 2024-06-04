const router = require("express").Router();

const v1 = "v1";

router.use(`/${v1}/eventos`, require("./eventos.routes"));
router.use(`/${v1}/productos_servicios`, require("./productos_servicios.routes"));
router.use(`/${v1}/proveedores`, require("./proveedores.routes"));
router.use(`/${v1}/reservas`, require("./reservas.routes"));
router.use(`/${v1}/users`, require("./user.routes"));

router.get("/", (req, res) => {
    res.send("Servidor en funcionamiento");
  });


module.exports = router;

