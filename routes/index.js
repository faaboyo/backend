const router = require("express").Router();

const v1 = "v1";

router.use(`/${v1}/profesores`, require("./profesor.routes"));

module.exports = router;
