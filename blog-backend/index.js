const express = require("express");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const categoryRoute = require("./routes/categories");
const logger = require("./logging/logger")
const multer = require("multer");
const path = require("path");
const CONFIG = require("./config/config");
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require("express-rate-limit")
const bodyParser = require('body-parser');
db = require("./database/db")
require("dotenv").config()

const app = express()
db.connectToMongoDB();


// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// enabling CORS for all requests
app.use(cors());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter)
// adding Helmet to enhance your API's security
app.use(helmet());

app.use('/api/v1/posts', postRoute);
app.use('/', userRoute);

// req.isAuthenticated is provided from the auth router

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "images");
//     },
//     filename: (req, file, cb) => {
//         cb(null, req.body.name);
//     },
// });

// const upload = multer({
//     storage: storage
// });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//     res.status(200).json("File has been uploaded");
// })

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/categories", categoryRoute);

//Error handler middleware
app.use((err, req, res, next) => {
    // logger.error(err.message)
    console.log(err)
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})

app.listen(CONFIG.PORT, () => {
    logger.info(`Server started on http://localhost:${CONFIG.PORT}`)
})
