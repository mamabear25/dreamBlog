import { db } from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    // check existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists");

        // hash password here and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`firstName`, `lastName`,`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.firstName,
            req.body.lastName,
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q,[values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("user has been created successfully!")
        })

    });

}

export const login = (req, res) => {
    // check for valid user
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        // check password
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password, data[0].password
        );

        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!");

        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        const { password, ...otherinfo } = data[0];

        res.cookie("access_token", token, {
            httpOnly: true
        })
        .status(200)
        .json(otherinfo);
    });

};

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out")
};