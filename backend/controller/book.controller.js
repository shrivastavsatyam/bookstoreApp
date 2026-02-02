import Book from "../model/book.model.js";

// GET all books from DB
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      success: true,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// CREATE new book
export const createBook = async (req, res) => {
  try {
    const { title, author, price } = req.body;

    const book = new Book({ title, author, price });
    await book.save();

    res.status(201).json({
      success: true,
      data: book
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};



