const router = require("express").Router();
const articleRoutes = require("./articleRoutes");

router.use("/articles", articlesRoutes);

module.exports = router;

