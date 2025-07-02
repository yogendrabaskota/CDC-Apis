"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookData_1 = __importDefault(require("../data/bookData"));
class BookController {
    getBookLink(req, res) {
        const { class: classNum, subject } = req.params;
        const classBooks = bookData_1.default[classNum];
        const bookLink = classBooks === null || classBooks === void 0 ? void 0 : classBooks[subject];
        if (bookLink) {
            res.json({ link: bookLink });
        }
        else {
            res.status(404).json({ error: "Book not found" });
        }
    }
    redirectToBook(req, res) {
        const { class: classNum, subject } = req.params;
        const classBooks = bookData_1.default[classNum];
        const bookLink = classBooks === null || classBooks === void 0 ? void 0 : classBooks[subject];
        if (bookLink) {
            if (Array.isArray(bookLink)) {
                res.redirect(bookLink[0]);
            }
            else {
                res.redirect(bookLink);
            }
        }
        else {
            res.status(404).send("Book not found");
        }
    }
}
exports.default = new BookController();
