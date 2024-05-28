const mongoose = require('mongoose')

//协议名称+IP地址+mongodb默认端口号+数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/student')

const conn = mongoose.connection

conn.on("open", () => {
    console.log("数据库连接ok");
})

conn.on("error", (err) => {
    console.log(err);
})

module.exports = mongoose