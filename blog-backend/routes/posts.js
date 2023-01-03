import express from 'express';
import { 
    addPost, 
    deletePost, 
    getPost, 
    getPosts, 
    updatePost 
} from '../controllers/post.js';

const router = express.Router()

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)


export default router;




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


