const express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")
const crypto = require("crypto")
const mongoose = require("mongoose");

require("dotenv").config();

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || console.error("port error");

app.listen(PORT, () => {
    console.log(` Server is running with port: ${PORT}`);
    
})

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((error) => {console.error("Lỗi kết nối MongoDB:", error);
})


// function debug(message) {
//     return console.log(message);
// }

// function readWithPath(url){
//     const filePath = path.join(__dirname, url)
//     return JSON.parse(fs.readFileSync(filePath, "utf-8"))
// }
// function writeWithPath(url){
//     const filePath = path.join(__dirname, url)
//     return fs.writeFileSync(filePath, JSON.stringify(element, null, 2));
// }

// 1.Xây dựng RESTful API với Node.js và Express:
//    - Viết một server cơ bản với các endpoint (GET, POST, PUT, DELETE) để quản lý danh sách sản phẩm hoặc người dùng.
//    - Tích hợp các route và middleware xử lý lỗi cơ bản.
// function auth() {
//     app.get("/user", () => {

//     })
// }