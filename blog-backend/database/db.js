import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "silverobinnaokonkwo",
    database: "dreamBlog",
    } 
);

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});
// const MONGODB_URI = process.env.MONGODB_URI

// function connectToMongoDB() {
//     mongoose.connect(MONGODB_URI);

//     // pass the callback function once connected
//     mongoose.connection.on("connected", () => {
//         console.log("Dreamers is connected to mongoDB");
//     });

//     mongoose.connection.on("error", (err) => {
//         console.log("Unable to connect to the DB, please check your connections", err);
//     })
// }

// module.exports = { connectToMongoDB };

