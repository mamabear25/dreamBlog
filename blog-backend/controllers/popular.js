import { db } from "../database/db.js";

export const getPopularPosts = (req, res) => {
    const q = req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?" 
    : "SELECT * FROM posts ORDER BY RAND()";

    db.query(q,[req.query.cat], (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
}

export const getPopularPost = (req, res) => {
    const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ? "

    db.query(q,[req.params.id], (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json(data[0])
    })
};