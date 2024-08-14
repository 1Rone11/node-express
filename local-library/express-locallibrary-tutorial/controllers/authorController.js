const Author = require("../models/author");
const Book = require('../models/book')
const asyncHandler = require("express-async-handler");
// 显示完整的作者列表
// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
    const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
    res.render("author_list", {
        title: "Author List",
        author_list: allAuthors,
    });
});


// 为每位作者显示详细信息的页面
exports.author_detail = asyncHandler(async (req, res, next) => {
    // Get details of author and all their books (in parallel)
    const [author, allBooksByAuthor] = await Promise.all([
        Author.findById(req.params.id).exec(),
        Book.find({ author: req.params.id }, "title summary").exec(),
    ]);

    if (author === null) {
        // No results.
        const err = new Error("Author not found");
        err.status = 404;
        return next(err);
    }

    res.render("author_detail", {
        title: "Author Detail",
        author: author,
        author_books: allBooksByAuthor,
    });
});

// 由 GET 显示创建作者的表单
exports.author_create_get = (req, res) => {
    res.send("未实现：作者创建表单的 GET");
};

// 由 POST 处理作者创建操作
exports.author_create_post = (req, res) => {
    res.send("未实现：创建作者的 POST");
};

// 由 GET 显示删除作者的表单
exports.author_delete_get = (req, res) => {
    res.send("未实现：作者删除表单的 GET");
};

// 由 POST 处理作者删除操作
exports.author_delete_post = (req, res) => {
    res.send("未实现：删除作者的 POST");
};

// 由 GET 显示更新作者的表单
exports.author_update_get = (req, res) => {
    res.send("未实现：作者更新表单的 GET");
};

// 由 POST 处理作者更新操作
exports.author_update_post = (req, res) => {
    res.send("未实现：更新作者的 POST");
};
