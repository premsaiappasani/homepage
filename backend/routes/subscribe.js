const router = require("express").Router();
const Subscribe = require("../models/Subscribe");
const dotenv = require("dotenv");
dotenv.config();

router.post("/", async (req, res) => {
    const subscription = new Subscribe(req.body);
    await subscription.save();
    res.status(200).json("Subscription successful");
})

module.exports = router;