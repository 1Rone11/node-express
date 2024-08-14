const BookInstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

// 显示完整的书本列表
// Display list of all BookInstances.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
    const allBookInstances = await BookInstance.find().populate("book").exec();

    res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: allBookInstances,
    });
});


// 为每位书本显示详细信息的页面
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
    const bookInstance = await BookInstance.findById(req.params.id)
        .populate("book")
        .exec();

    if (bookInstance === null) {
        // No results.
        const err = new Error("Book copy not found");
        err.status = 404;
        return next(err);
    }

    res.render("bookinstance_detail", {
        title: "Book:",
        bookinstance: bookInstance,
    });
});

// 由 GET 显示创建书本的表单
exports.bookinstance_create_get = (req, res) => {
    res.send("未实现：书本创建表单的 GET");
};

// 由 POST 处理书本创建操作
exports.bookinstance_create_post = (req, res) => {
    res.send("未实现：创建书本的 POST");
};

// 由 GET 显示删除书本的表单
exports.bookinstance_delete_get = (req, res) => {
    res.send("未实现：书本删除表单的 GET");
};

// 由 POST 处理书本删除操作
exports.bookinstance_delete_post = (req, res) => {
    res.send("未实现：删除书本的 POST");
};

// 由 GET 显示更新书本的表单
exports.bookinstance_update_get = (req, res) => {
    res.send("未实现：书本更新表单的 GET");
};

// 由 POST 处理书本更新操作
exports.bookinstance_update_post = (req, res) => {
    res.send("未实现：更新书本的 POST");
};
