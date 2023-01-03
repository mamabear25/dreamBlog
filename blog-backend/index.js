import express from "express";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser";
// const helmet = require('helmet');
// const cors = require('cors');
// const rateLimit = require("express-rate-limit")
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

// enabling CORS for all requests
// app.use(cors());

// const upload = multer({store: store});
// app.post("/api/v2/upload", upload.single("file"),(req, res) => {
//     res.status(200).json("file has been uploaded")
// })

// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })

// app.use(limiter)
// // adding Helmet to enhance your API's security
// app.use(helmet());


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
// app.use((err, req, res, next) => {
//     // logger.error(err.message)
//     console.log(err)
//     const errorStatus = err.status || 500
//     res.status(errorStatus).send(err.message)
//     next()
// })

app.listen(8800, () => {
    console.log("connected")
})
