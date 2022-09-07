const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).send("Hi user router");
})

module.exports = router;

