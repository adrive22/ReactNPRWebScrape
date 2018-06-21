const router = require("express").Router();
const articlesController = require("../../controllers/booksController");

router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create)


router.route("/:id")
    .get(articlesController.findById)
    .push(articlesController.update)
    .delte(articlesController.remove);

module.exports = router;

