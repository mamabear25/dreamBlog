import { db } from "../database/db.js";

export const getFeaturedPost = (req, res) => {
    const q = "SELECT `title`,`desc`, `img` FROM posts ORDER BY RAND(20230104) LIMIT 1;"

    db.query(q,[req.params.id], (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json(data[0])
    })
}

export const getFeaturedPostById = (req, res) => {
    const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ? "

    db.query(q,[req.params.id], (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json(data[0])
    })
};

