const router = require("express").Router();

const userRouter = require("./user.router");
const bookRouter = require("./book.router");
const authorRouter = require("./author.router");

router.use("/users", userRouter);
router.use("/books", bookRouter); // 2 - ish
router.use("/authors", authorRouter); // 1 - ish

module.exports = router;
