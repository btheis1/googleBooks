const router = require("express").Router();
const googleController = require("../../controllers/googleCont");

router.route("/")
    .get(googleController.allBooks);

module.exports = router;