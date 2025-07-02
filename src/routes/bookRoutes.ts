import express from 'express';
import BookController from '../controller/bookController'

const router = express.Router();

router.get('/:class/:subject', BookController.getBookLink)
router.get('/redirect/:class/:subject', BookController.redirectToBook.bind(BookController))

export default router;
