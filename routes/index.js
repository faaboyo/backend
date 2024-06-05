const router = require("express").Router();

const v1 = "v1";

router.use(`/${v1}/Evento`, require("./evento.routes"));
router.use(`/${v1}/producto`, require("./producto.routes"));
router.use(`/${v1}/proveedor`, require("./proveedor.routes"));
router.use(`/${v1}/reserva`, require("./reserva.routes"));
router.use(`/${v1}/user`, require("./user.routes"));

router.get("/", (req, res) => {
    res.send("Servidor en funcionamiento");
  });


module.exports = router;

