const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    // 并行获取书的详细信息、书实例、作者和体裁的数量
    const [
        numBooks,
        numBookInstances,
        numAvailableBookInstances,
        numAuthors,
        numGenre,
    ] = await Promise.all([
        Book.countDocuments({}).exec(),
        BookInstance.countDocuments({}).exec(),
        BookInstance.countDocuments({ status: "Available" }).exec(),
        Author.countDocuments({}).exec(),
        Genre.countDocuments({}).exec(),
    ]);

    res.render("index", {
        title: "Local Library Home",
        book_count: numBooks,
        book_instance_count: numBookInstances,
        book_instance_available_count: numAvailableBookInstances,
        author_count: numAuthors,
        genre_count: numGenre,
    });
});

// 显示完整的书籍列表
// Display list of all Books.
exports.book_list = asyncHandler(async (req, res, next) => {
    const allBooks = await Book.find({}, "title author")
        .sort({ title: 1 })
        .populate("author")
        .exec();

    res.render("book_list", { title: "Book List", book_list: allBooks });
});



// 为每位书籍显示详细信息的页面
exports.book_detail = asyncHandler(async (req, res, next) => {
    // Get details of books, book instances for specific book
    const [book, bookInstances] = await Promise.all([
        Book.findById(req.params.id).populate("author").populate("genre").exec(),
        BookInstance.find({ book: req.params.id }).exec(),
    ]);

    if (book === null) {
        // No results.
        const err = new Error("Book not found");
        err.status = 404;
        return next(err);
    }

    res.render("book_detail", {
        title: book.title,
        book: book,
        book_instances: bookInstances,
    });
});

// 由 GET 显示创建书籍的表单
exports.book_create_get = (req, res) => {
    res.send("未实现：书籍创建表单的 GET");
};

// 由 POST 处理书籍创建操作
exports.book_create_post = (req, res) => {
    res.send("未实现：创建书籍的 POST");
};

// 由 GET 显示删除书籍的表单
exports.book_delete_get = (req, res) => {
    res.send("未实现：书籍删除表单的 GET");
};

// 由 POST 处理书籍删除操作
exports.book_delete_post = (req, res) => {
    res.send("未实现：删除书籍的 POST");
};

// 由 GET 显示更新书籍的表单
exports.book_update_get = (req, res) => {
    res.send("未实现：书籍更新表单的 GET");
};

// 由 POST 处理书籍更新操作
exports.book_update_post = (req, res) => {
    res.send("未实现：更新书籍的 POST");
};
