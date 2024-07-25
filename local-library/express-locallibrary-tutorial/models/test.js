/*
 * @Author: Zkiki
 * @Date: 2023-10-20 17:52:46
 * @FilePath: \node-express\local-library\express-locallibrary-tutorial\model\test.js
 * @Description: 
 */
// 获取 Mongoose
const mongoose = require("mongoose");

// 定义一个模式
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date,
});
// 使用模式“编译”模型
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);