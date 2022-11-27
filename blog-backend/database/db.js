const mongoose = require("mongoose");
require("dotenv").config()

const MONGODB_URL = process.env.MONGODB_URL

function connectToMongoDB() {
    mongoose.connect(MONGODB_URL);

    // pass the callback function once connected
    mongoose.connection.on("connected", () => {
        console.log("Dreamers is connected to mongoDB");
    });

    mongoose.connection.on("error", (err) => {
        console.log("Unable to connect to the DB, please check your connections", err);
    })
}

module.exports = { connectToMongoDB };

