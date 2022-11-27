const express = require('express');
const userController = require("../controllers/User");
const auth0Middleware = require('../auth/auth0');
const { requiresAuth } = require('express-openid-connect');

const userRouter = express.Router()

userRouter.use(auth0Middleware);

userRouter.get('/', userController.login);
userRouter.get('/home', userController.home);
  
userRouter.get("/check", requiresAuth(), userController.check);
  
userRouter.get("/nocheck", userController.noCheck)

userRouter.get("/userinfo", requiresAuth(), userController.userInfo)

userRouter.get('/profile', requiresAuth(), userController.profile);

userRouter.get('/admin', requiresAuth(), userController.admin);

module.exports = userRouter

// const router = require("express").Router();
// const User = require("../models/User");

// router.put("/:id", async (req, res) => {
//     if(req.body.userId === req.params.id) {
//         try{
//             const updatedUser = await User.findByIdAndUpdate(req.params.id, {
//                 $set: req.body
//             }, {new: true});
//             res.status(200).json(updatedUser)
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     } else {
//         res.status(401).json("you can only update your account!");
//     }
// });