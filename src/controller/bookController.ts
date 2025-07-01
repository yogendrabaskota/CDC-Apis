import { Request, Response } from 'express';
import books from '../data/bookData';

class BookController {
  public getBookLink(req: Request, res: Response): void {
    const { class: classNum, subject } = req.params;
    const classBooks = books[classNum];
    const bookLink = classBooks?.[subject];

    if (bookLink) {
      res.json({ link: bookLink }); 
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  }

  public redirectToBook(req: Request, res: Response): void {
    const { class: classNum, subject } = req.params;
    const classBooks = books[classNum];
    const bookLink = classBooks?.[subject];

    if (bookLink) {
      if (Array.isArray(bookLink)) {
    
        res.redirect(bookLink[0]);
      } else {
        res.redirect(bookLink);
      }
    } else {
      res.status(404).send("Book not found");
    }
  }
}

export default new BookController();
