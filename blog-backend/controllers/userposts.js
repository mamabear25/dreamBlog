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


export const getUserByID = (req, res) => {
    const userId = req.params.userId;

    const q = "SELECT * FROM users WHERE `id` = ?"

    db.query(q,[user.id], (err, data) => {
        if(err) return res.status(500).json(err)

        const { password, ...info} = data[0]
        return res.status(200).json(info)
    })
}
