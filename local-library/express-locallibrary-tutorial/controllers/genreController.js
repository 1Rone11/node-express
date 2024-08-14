const Genre = require("../models/genre");
const asyncHandler = require("express-async-handler");
const Book = require("../models/book");
// const async = require("async");

// 显示完整的类型列表
exports.genre_list = asyncHandler(async (req, res, next) => {
    const allGenre = await Genre.find().sort({ name: 1 }).exec();
    res.render('genre_list', {
        title: 'Genre List',
        genre_list: allGenre
    })
})

// 为每位类型显示详细信息的页面
exports.genre_detail = asyncHandler(async (req, res, next) => {
    // Get details of genre and all associated books (in parallel)
    const [genre, booksInGenre] = await Promise.all([
        Genre.findById(req.params.id).exec(),
        Book.find({ genre: req.params.id }, "title summary").exec(),
    ]);

    if (genre === null) {
        // No results.
        const err = new Error("Genre not found");
        err.status = 404;
        return next(err);
    }

    res.render("genre_detail", {
        title: "Genre Detail",
        genre: genre,
        genre_books: booksInGenre,
    });
});


// 由 GET 显示创建类型的表单
exports.genre_create_get = (req, res) => {
    res.send("未实现：类型创建表单的 GET");
};

// 由 POST 处理类型创建操作
exports.genre_create_post = (req, res) => {
    res.send("未实现：创建类型的 POST");
};

// 由 GET 显示删除类型的表单
exports.genre_delete_get = (req, res) => {
    res.send("未实现：类型删除表单的 GET");
};

// 由 POST 处理类型删除操作
exports.genre_delete_post = (req, res) => {
    res.send("未实现：删除类型的 POST");
};

// 由 GET 显示更新类型的表单
exports.genre_update_get = (req, res) => {
    res.send("未实现：类型更新表单的 GET");
};

// 由 POST 处理类型更新操作
exports.genre_update_post = (req, res) => {
    res.send("未实现：更新类型的 POST");
};
