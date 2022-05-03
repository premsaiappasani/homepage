const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const subscriptionsRouter = require("./routes/subscribe");
dotenv.config();
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Mongo Connected");
}
);
app.use(express.json());



app.use("/subscribe", subscriptionsRouter);



app.listen(8800, () => {
    console.log("Listening on 8800");
});
