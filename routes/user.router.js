const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("User api")
})

module.exports = router;
