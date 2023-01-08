import { db } from "../database/db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
    const q = req.query.cat 
    ? "SELECT * FROM posts WHERE cat=? ORDER BY date DESC" 
    : "SELECT * FROM posts ORDER BY date DESC";

    db.query(q,[req.query.cat], (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
}

export const getPost = (req, res) => {
    const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ? "

    db.query(q,[req.params.id], (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json(data[0])
    })
};

export const addPost = (req, res) => {
    const token = req.cookies.access_token

    if(!token) return res.status(401).json("Unauthorized!")

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(err) return res.status(403),json("Token is not valid!");
    
        const q = "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?)"
        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
            req.body.date,
            userInfo.id
        ]

        db.query(q, [values], (err, data) => {
            if(err) return res.status(500).json(err);

            return res.status(201).json("post has been created")
        })
    });
};

export const updatePost = (req, res) => {
    const token = req.cookies.access_token

    if(!token) return res.status(401).json("Unauthorized!")

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(err) return res.status(403),json("Token is not valid!");
    
        const postId = req.params.id

        const q = "UPDATE posts SET `title=?`, `desc=?`, `img=?`, `cat=?` WHERE `id` = ? AND `uid` = ?";
        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
        ]

        db.query(q, [...values, postId, userInfo.id], (err, data) => {
            if(err) return res.status(500).json(err);

            return res.status(201).json("post has been updated")
        })
    });
};

export const deletePost = (req, res) => {
    const token = req.cookies.access_token

    if(!token) return res.status(401).json("Unauthorized!")

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(err) return res.status(403),json("Token is not valid!")

        const postId = req.params.id
        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"

        db.query(q, [postId, userInfo.id], (err, data) => {
            if(err) return res.status(403).json("you are not allowed to perform that action!")

            return res.json("Post has been deleted")
        })
    })
};