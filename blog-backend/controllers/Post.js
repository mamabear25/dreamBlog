const Post = require('../models/Post')
const {readingTime} = require("../routes/readTime")
const { Router } = require ("express");

//functional;
function getAllPosts(req, res) {
    Post.find()
    .select({title: 1})
    .populate("username", {username:1})
        .then(posts => {
            res.send(posts)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
}

//functional;
function getPostByID(req, res) {
    const id = req.params.id
    Post.findById(id)
        .then(post => {
            res.status(200).send(post)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
}

//functional;
function addPost(req, res) {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        reading_time: readingTime(req.body.description),
        username: req.oidc.user,
        read_count: req.body.read_count
    });
    post.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Post.create(post)
        .then(post => {
            res.status(201).send(post)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        }
    )
}

// function addPost(req, res) {
//     const post = req.body
//     post.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
//     Post.create(post)
//         .then(post => {
//             res.status(201).send(post)
//         }).catch(err => {
//             console.log(err)
//             res.status(500).send(err)
//         })
// }


function updatePost(req, res) {
    const id = req.params.id
    const post = req.body
    book.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Post.findByIdAndUpdate(id, post, { new: true })
        .then(newPost => {
            res.status(200).send(newPost)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        }
    )
}

function deletePostByID(req, res) {
    const id = req.params.id
    Post.findByIdAndRemove(id)
        .then(post => {
            res.status(200).send(post)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        }
    )
}

module.exports = {
    getAllPosts,
    getPostByID,
    addPost,
    updatePost,
    deletePostByID
}

// const express = require('express')
// const multer  = require('multer')
// //importing mongoose schema file
// const Upload = require("../models/Upload");
// const app = express()
// //setting options for multer
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


// app.post("/upload", upload.single("file"), async (req, res) => {
//     // req.file can be used to access all file properties
//     try {
//       //check if the request has an image or not
//       if (!req.file) {
//         res.json({
//           success: false,
//           message: "You must provide at least 1 file"
//         });
//       } else {
//         let imageUploadObject = {
//           file: {
//             data: req.file.buffer,
//             contentType: req.file.mimetype
//           },
//           fileName: req.body.fileName
//         };
//         const uploadObject = new Upload(imageUploadObject);
//         // saving the object into the database
//         const uploadProcess = await uploadObject.save();
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Server Error");
//     }
//   });
  