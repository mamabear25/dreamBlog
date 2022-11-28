const express = require('express');
const postController = require("../controllers/Post");
const auth0Middleware = require('../auth/auth0');
const { requiresAuth } = require('express-openid-connect');

const postRouter = express.Router()

postRouter.use(auth0Middleware);

postRouter.get('/', requiresAuth, postController.getAllPosts)

postRouter.get('/:id', postController.getPostByID)

postRouter.post('/', requiresAuth(), postController.addPost)

postRouter.put('/:id', requiresAuth(), postController.updatePost)

postRouter.delete('/:id', requiresAuth(), postController.deletePostByID)

module.exports = postRouter




// const { Router } = require ("express");

// //get all posts
// router.get("/", async (req, res)=> {
//     const username = req.query.user;
//     const catName = req.query.cat;

//     try {
//         let posts;
//         if(username) {
//             posts = await posts.find({ username });
//         } else if (catName) {
//             posts = await posts.find({
//                 categories: {
//                     $in: [catName],
//                 },
//             });
//         } else {
//             posts = await posts.find();
//         }
//         res.status(200).json(posts);
//     } catch (err) {
//         console.log(err)
//     }
// });

// //get post
// router.get("/:id", async (req, res) => {
//     try{
//         const post = await Post.findById(req.params.id);
//         res.status(200).json(post);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// //delete post
// router.delete("/:id", async (req, res) => {
//     try{
//         const post = await Post.findById(req.params.id);
//         if(post.username === req.body.username) {
//             try{
//                 await post.delete();
//                 res.status(200).json("post has been deleted...");
//             } catch (err) {
//                 res.status(500).json(err);
//             }
//         } else {
//             res.status(401).json("You can only delete you post!");
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


