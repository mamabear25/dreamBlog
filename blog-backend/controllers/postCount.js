import { db } from "../database/db.js";

export const getPostsCountByUser = (req, res) => {
    const token = req.cookies.access_token

    if(!token) return res.status(401).json("Unauthorized!")

    jwt.verify(token, "jwtkey", (err, user) => {
        if(err) return res.status(403),json("Token is not valid!");

        db.query("SELECT COUNT(*) FROM posts p JOIN users u ON p.uid = u.id WHERE `uid` = ?", [user.id], (err, data) => {
            if(err) return res.status(500).json(err)

            return res.status(200).json(data)
        })
    });
}