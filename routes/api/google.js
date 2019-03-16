const router = require("express").Router();
const googleController = require("../../controllers/googleCont");

router.route("/")
    .get(googleController.findAll);

module.exports = router;