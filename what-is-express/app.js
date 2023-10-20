/*
 * @Author: Zkiki
 * @Date: 2023-10-20 14:23:43
 * @FilePath: \node-express\app.js
 * @Description: 
 */
const express = require('express')
const square = require('./square')
const wiki = require('./wiki')
const logger = require('morgan');
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/wiki', wiki)
app.use(logger('dev'));



// 示例中间件函数
const a_middleware_function = (req, res, next) => {
    // ... 进行一些操作
    next(); // 调用 next() ，Express 将调用处理链中下一个中间件函数。
};

// 用 use() 为所有的路由和动词添加该函数
app.use(a_middleware_function);

// 用 use() 为一个特定的路由添加该函数
app.use("/someroute", a_middleware_function);

// 为一个特定的 HTTP 动词和路由添加该函数
app.get("/", a_middleware_function);

console.log("边长为 4 的正方形面积为 " + square.area(4));

// app.use(express.static("static")); // 静态托管(可以托管多个)
app.use("/media", express.static("public"));

// 需要放置在最后，因为他是最后处理的
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("出错了！");
});
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})