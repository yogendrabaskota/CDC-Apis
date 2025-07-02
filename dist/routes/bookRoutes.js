"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = __importDefault(require("../controller/bookController"));
const router = express_1.default.Router();
router.get('/:class/:subject', bookController_1.default.getBookLink);
router.get('/redirect/:class/:subject', bookController_1.default.redirectToBook.bind(bookController_1.default));
exports.default = router;
