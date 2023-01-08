import { db } from "../database/db.js";
import jwt from "jsonwebtoken";

export const getPostsByUser = (req, res) => {
    const token = req.cookies.access_token

    if(!token) return res.status(401).json("Unauthorized!")

    jwt.verify(token, "jwtkey", (err, user) => {
        if(err) return res.status(403),json("Token is not valid!");

        db.query("SELECT * FROM posts WHERE `uid` = ?", [user.id], (err, data) => {
            if(err) return res.status(500).json(err)

            return res.status(200).json(data)
        })
    });
}

export const updateUser = (req, res) => {
    const token = req.cookies.access_token

    if(!token) return res.status(401).json("Unauthorized!")

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(err) return res.status(403),json("Token is not valid!");
    
        const userId = req.params.id

        const q = "UPDATE users SET `firstName=?`, `firstName=?`, `username=?`, `email=?`, `img=?`, WHERE `id` = ?";
        const values = [
            req.body.firstName,
            req.body.lastName,
            req.body.username,
            req.body.email,
            req.body.img,
        ]

        db.query(q, [...values, userId, userInfo.id], (err, data) => {
            if(err) return res.status(500).json(err);

            return res.status(201).json("profile has been updated")
        })
    });
};


export const deleteUser = (req, res) => {
    const token = req.cookies.access_token

    if(!token) return res.status(401).json("Unauthorized!")

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(err) return res.status(403),json("Token is not valid!")

        const userId = req.body.id
        const q = "DELETE FROM users WHERE `id` = ?"

        db.query(q, [userId, userInfo.id], (err, data) => {
            if(err) return res.status(403).json("you are not allowed to perform that action!")

            return res.json("Your account has been deleted")
        })
    })
};

export const getUser = (req, res) => {
    const userId = req.params.userId;

    const q = "SELECT u.id, `firstName`, `lastName`, `username`, `email`, `img`, p.id AS post_id, p.title, p.content FROM users u JOIN posts p ON u.id = p.user_id WHERE u.id = ?";

    db.query(q,[userId], (err, data) => {
        if(err) return res.status(500).json(err)

        // const { password, ...info} = data[0]
        return res.status(200).json(data)
    })
}

