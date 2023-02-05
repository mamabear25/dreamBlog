export const getSlides = (req, res) => {
    const q = "SELECT * FROM posts ORDER BY created_at DESC LIMIT 5";

    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
}



// Dreamers Blog
// Project Description
// This project is a web application using Node.js, Express, and MySQL. DreamBlog allows users to create an account and publish posts on a feed. The application also allows users to view profiles of other users and see their posts, It demonstrates a one-to-many SQL relationship.
// Technology Stack
// Back-end: Node.js, Express
// Database: MySQL

// Prerequisites
// Basic knowledge of JavaScript, and SQL
// Node.js and npm installed on your machine
// MySQL server installed and running on your machine

// Step 1: Set up the back-end server
// Create a new directory for the project and navigate to it in the terminal.
// Initialize a new Node.js project by running npm init.
// Install the following dependencies:

// express: a fast, minimalistic web framework for Node.js
// MySQL: Database of choice
// bcrypt: a library for hashing and salting passwords
// jsonwebtoken: a library for generating JSON web tokens (JWTs) for authentication

// $ mkdir directoryName
// $ cd directoryName
// $ npm init -y
// $ npm install mysql
// Structure for the app
// root
// ├── controllers
// │ ├── auth.js
// │ ├── post.js
// │ └── user.js
// ├── database
// │ └── db.js
// ├── routes
// │ ├── auth.js
// │ ├── posts.js
// │ └── users.js
// ├── .env
// ├── index.js
// ├── package.json
// ├── yarn.lock
// └── README.md

// Step 2: Create a connection to the database
// Next, create a file to connect to the MySQL database and test the connection. In the database folder, create a file database.js and add the following code to set up the server:

// import mysql from "mysql";

// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "mypassword",
//     database: "dreamBlog",
//     } 
// );

// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
// });
// Step 3: Set up the database
// Create a new database in MySQL and name it dreamBlog.
// Create a new table called users with the following structure:

// This table will store the user accounts for the application.
// id (int, primary key, auto-increment)
// firstName (varchar(255))
// lastName (varchar(255))
// username (varchar(45))
// email (varchar(255))
// password (varchar(255))
// img (varchar(255))
// 3. Create a new table called posts with the following structure:
// This table will store blog posts created by users. The uid field is a foreign key that references the id field in the users table.
// id (int, primary key, auto-increment)
// title (varchar(255))
// desc (varchar(2000))
// img (varchar(255))
// date (DATE(datetime))
// uid (int foreign KEY)
// cat (varchar(255))
// Step 4: Create a .env file
// This file will hold all the environment variables such as jwt_secret
// jwt_secret: makesurethesecretislongandsomewhatcomplex
// Project Implementation
// step 1: App entry point {Index.js}
// The code here creates an instance of an express app and sets up some middleware and routes for the app. Here is a breakdown of some part:
// The first four lines import various modules that are needed for the app. express is a web framework for Node.js, postRoutes, userRoutes, and authRoutes are custom modules that define routes for the app, cookieParser is a middleware that parses cookie header and populates req.cookies with an object keyed by the cookie names.
// This code creates an express app and sets up middleware and routes for handling requests. It also enables CORS for all requests and sets up an error-handling middleware. Finally, it starts the app and tells it to listen for requests on port 8800. The app has routes for authentication, users, and posts, and it uses a JSON payload parser and cookie parser middleware.
// import express from "express";
// import postRoutes from "./routes/posts.js"
// import userRoutes from "./routes/userpost.js"
// import authRoutes from "./routes/auth.js"
// import cookieParser from "cookie-parser";

// const app = express()

// app.use(express.json())
// app.use(cookieParser())

// app.use("/api/auth", authRoutes)
// app.use("/api/users", userRoutes)
// app.use("/api/posts", postRoutes)

// // enabling CORS for all requests
// app.use(cors());

// // Error handler middleware
// app.use((err, req, res, next) => {
//     // logger.error(err.message)
//     console.log(err)
//     const errorStatus = err.status || 500
//     res.status(errorStatus).send(err.message)
//     next()
// });

// app.listen(8800, () => {
//     console.log("connected")
// });
// controllers
// Auth-controller
// This code exports three functions for handling user authentication. The register function checks for an existing user with the provided email or username, and if none exists, it creates a new user by hashing the provided password and inserting the user's details into a database. The login function checks for a valid user with the provided username, and if one is found, it compares the provided password to the hashed password stored in the database. If the passwords match, it creates a JSON web token (JWT) and sets it as an HTTP-only cookie in the response. The logout function clears the JWT cookie from the response. All three functions send JSON responses to the client.
// import { db } from "../database/db.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const register = (req, res) => {
//     // check existing user
//     const q = "SELECT * FROM users WHERE email = ? OR username = ?"

//     db.query(q, [req.body.email, req.body.username], (err, data) => {
//         if(err) return res.json(err)
//         if(data.length) return res.status(409).json("User already exists");

//         // hash password here and create a user
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(req.body.password, salt);

//         const q = "INSERT INTO users (`firstName`, `lastName`,`username`, `email`, `password`) VALUES (?)"
//         const values = [
//             req.body.firstName,
//             req.body.lastName,
//             req.body.username,
//             req.body.email,
//             hash,
//         ]

//         db.query(q,[values], (err, data) => {
//             if (err) return res.json(err);
//             return res.status(200).json("user has been created successfully!")
//         })

//     });

// }

// export const login = (req, res) => {
//     // check for valid user
//     const q = "SELECT * FROM users WHERE username = ?"

//     db.query(q, [req.body.username], (err, data) => {
//         if (err) return res.json(err);
//         if (data.length === 0) return res.status(404).json("User not found!");

//         // check password
//         const isPasswordCorrect = bcrypt.compareSync(
//             req.body.password, data[0].password
//         );

//         if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!");

//         const token = jwt.sign({ id: data[0].id }, "jwtkey");
//         const { password, ...otherinfo } = data[0];

//         res.cookie("access_token", token, {
//             httpOnly: true
//         })
//         .status(200)
//         .json(otherinfo);
//     });

// };

// export const logout = (req, res) => {
//     res.clearCookie("access_token", {
//         sameSite: "none",
//         secure: true
//     }).status(200).json("User has been logged out")
// };
// post controller
// This code exports five functions for handling posts in a blog app. The getPosts function retrieves a list of posts from a database. The getPost function retrieves a single post by its ID. The addPost, updatePost, and deletePost functions require a valid JSON web token (JWT) to be present in the request cookies. If a valid JWT is present, the addPost function creates a new post, the updatePost function updates an existing post, and the deletePost function deletes a post. If a JWT is not present or is not valid, the functions return an error response. All functions send JSON responses to the client.
// import { db } from "../database/db.js";
// import jwt from "jsonwebtoken";

// export const getPosts = (req, res) => {
//     const q = req.query.cat 
//     ? "SELECT * FROM posts WHERE cat=? ORDER BY date DESC" 
//     : "SELECT * FROM posts ORDER BY date DESC";

//     db.query(q,[req.query.cat], (err, data) => {
//         if(err) return res.status(500).json(err)n

//         return res.status(200).json(data)
//     })
// }

// export const getPost = (req, res) => {
//     const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ? "

//     db.query(q,[req.params.id], (err, data) => {
//         if(err) return res.status(500).json(err)

//         return res.status(200).json(data[0])
//     })
// };

// export const addPost = (req, res) => {
//     const token = req.cookies.access_token

//     if(!token) return res.status(401).json("Unauthorized!")

//     jwt.verify(token, "jwtkey", (err, userInfo) => {
//         if(err) return res.status(403),json("Token is not valid!");
    
//         const q = "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?)"
//         const values = [
//             req.body.title,
//             req.body.desc,
//             req.body.img,
//             req.body.cat,
//             req.body.date,
//             userInfo.id
//         ]

//         db.query(q, [values], (err, data) => {
//             if(err) return res.status(500).json(err);

//             return res.status(201).json("post has been created")
//         })
//     });
// };

// export const updatePost = (req, res) => {
//     const token = req.cookies.access_token

//     if(!token) return res.status(401).json("Unauthorized!")

//     jwt.verify(token, "jwtkey", (err, userInfo) => {
//         if(err) return res.status(403),json("Token is not valid!");
    
//         const postId = req.params.id

//         const q = "UPDATE posts SET `title=?`, `desc=?`, `img=?`, `cat=?` WHERE `id` = ? AND `uid` = ?";
//         const values = [
//             req.body.title,
//             req.body.desc,
//             req.body.img,
//             req.body.cat,
//         ]

//         db.query(q, [...values, postId, userInfo.id], (err, data) => {
//             if(err) return res.status(500).json(err);

//             return res.status(201).json("post has been updated")
//         })
//     });
// };

// export const deletePost = (req, res) => {
//     const token = req.cookies.access_token

//     if(!token) return res.status(401).json("Unauthorized!")

//     jwt.verify(token, "jwtkey", (err, userInfo) => {
//         if(err) return res.status(403),json("Token is not valid!")

//         const postId = req.params.id
//         const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"

//         db.query(q, [postId, userInfo.id], (err, data) => {
//             if(err) return res.status(403).json("you are not allowed to perform that action!")

//             return res.json("Post has been deleted")
//         })
//     })
// };
// user controller
// This code exports four functions for handling user accounts. The getPostsByUser function retrieves a list of posts made by a user with a valid JSON web token (JWT) in the request cookies. The updateUser function update the user's profile details and require a valid JWT in the request cookies. The deleteUser function deletes the user's account and also requires a valid JWT. The getUser function retrieves a user's profile details and the getUserPosts function retrieves a list of posts made by a specific user, both by their ID. All functions send JSON responses to the client.
// import { db } from "../database/db.js";
// import jwt from "jsonwebtoken";

// export const getPostsByUser = (req, res) => {
//     const token = req.cookies.access_token

//     if(!token) return res.status(401).json("Unauthorized!")

//     jwt.verify(token, "jwtkey", (err, user) => {
//         if(err) return res.status(403),json("Token is not valid!");

//         db.query("SELECT * FROM posts WHERE `uid` = ?", [user.id], (err, data) => {
//             if(err) return res.status(500).json(err)

//             return res.status(200).json(data)
//         })
//     });
// }

// export const updateUser = (req, res) => {
//     const token = req.cookies.access_token

//     if(!token) return res.status(401).json("Unauthorized!")

//     jwt.verify(token, "jwtkey", (err, userInfo) => {
//         if(err) return res.status(403),json("Token is not valid!");
    
//         const userId = req.params.id

//         const q = "UPDATE users SET `firstName=?`, `firstName=?`, `username=?`, `email=?`, `img=?`, WHERE `id` = ?";
//         const values = [
//             req.body.firstName,
//             req.body.lastName,
//             req.body.username,
//             req.body.email,
//             req.body.img,
//         ]

//         db.query(q, [...values, userId, userInfo.id], (err, data) => {
//             if(err) return res.status(500).json(err);

//             return res.status(201).json("profile has been updated")
//         })
//     });
// };

// export const deleteUser = (req, res) => {
//     const token = req.cookies.access_token

//     if(!token) return res.status(401).json("Unauthorized!")

//     jwt.verify(token, "jwtkey", (err, userInfo) => {
//         if(err) return res.status(403),json("Token is not valid!")

//         const userId = req.body.id
//         const q = "DELETE FROM users WHERE `id` = ?"

//         db.query(q, [userId, userInfo.id], (err, data) => {
//             if(err) return res.status(403).json("you are not allowed to perform that action!")

//             return res.json("Your account has been deleted")
//         })
//     })
// };

// export const getUser = (req, res) => {
//     const userId = req.params.userId;

//     const q = "SELECT u.id, `firstName`, `lastName`, `username`, `email`, `img`, p.id AS post_id, p.title, p.content FROM users u JOIN posts p ON u.id = p.user_id WHERE u.id = ?";

//     db.query(q,[userId], (err, data) => {
//         if(err) return res.status(500).json(err)

//         // const { password, ...info} = data[0]
//         return res.status(200).json(data)
//     })
// }

// Auth route
// This code creates an Express router and sets up three routes for handling user authentication. The /register route accepts a POST request with a JSON payload and passes it to the register function in the auth.js file. The /login route accepts a POST request with a JSON payload and passes it to the login function in the auth.js file. The /logout route accepts a POST request and passes it to the logout function in the auth.js file. The router is then exported and can be used to handle requests to these routes in the app.
// import express from 'express';
// import { register, login, logout } from './auth.js';

// const router = express.Router()

// router.post("/register", register)
// router.post("/login", login)
// router.post("/logout", logout)

// export default router;
// Post route
// This code creates an Express router and sets up five routes for handling posts in a blog app. The / route handles a GET request and passes it to the getPosts function in the post.js file. The /:id route handles a GET request and passes it to the getPost function in the post.js file. The / route handles a POST request and passes it to the addPost function in the post.js file. The /:id route handles a DELETE request and passes it to the deletePost function in the post.js file. The /:id route handles a PUT request and passes it to the updatePost function in the post.js file. The router is then exported and can be used to handle requests to these routes in the app.
// import express from 'express';
// import { 
//     addPost, 
//     deletePost, 
//     getPost, 
//     getPosts, 
//     updatePost
// } from './post.js';

// const router = express.Router()

// router.get("/", getPosts)
// router.get("/:id", getPost)
// router.post("/", addPost)
// router.delete("/:id", deletePost)
// router.put("/:id", updatePost)

// export default router;
// users route
// This code creates an Express router and sets up four routes for handling user accounts in a blog app. The / route handles a GET request and passes it to the getPostsByUser function in the userposts.js file. The /:id route handles a PUT request and passes it to the updateUser function in the userposts.js file. The /:id route handles a GET request and passes it to the getUser function in the userposts.js file. The /:id route handles a DELETE request and passes it to the deleteUser function in the userposts.js file. The router is then exported and can be used to handle requests to these routes in the app.
// import express from 'express';
// import { 
//     getPostsByUser,
//     getUser,
//     updateUser,
//     deleteUser,
// } from './userposts.js';

// const router = express.Router()

// router.get("/", getPostsByUser)
// router.put("/:id", updateUser)
// router.get("/:id", getUser)
// router.delete("/:id", deleteUser)

// export default router;
// Improvements and new Features
// User's can view their profiles, update their profile and view their posts
// User's can view other users profiles and posts.
// The blogging-Api was converted into a full-stack application

// Deployment
// Deploy the back-end to a hosting service such as Heroku, Render.
// Set up the appropriate environment variables for the hosting services.

// Conclusion
// In this project, I created a web application that allows users to create an account, publish posts, and view profiles of other users. I Node.js and Express for the back-end, and MySQL for the database. The application has been deployed and is being maintained.