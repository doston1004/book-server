const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Author api");
});

module.exports = router;
