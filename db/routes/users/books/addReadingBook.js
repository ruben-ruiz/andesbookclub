const express = require('express');
const axios = require('axios');
const db = require('../../../index');

const addReadingBookRouter = express.Router();

function insertBook(bookid, userId) {
  return bookApi(bookid)
    .then((apiRes) => {
      return bookData(apiRes.data, userId);
    })
    .then((dataObj) => {
      const {
        userData, authorData, categData, bookCols, bookVals,
      } = dataObj;

      return db.query(`
        BEGIN;
          INSERT INTO books (${bookCols})
          VALUES (${bookVals})
          ON CONFLICT DO NOTHING;

          INSERT INTO authorsBooks (authorName, bookId)
          VALUES ${authorData}
          ON CONFLICT DO NOTHING;

          INSERT INTO bookCategories (categoryName, bookId)
          VALUES ${categData}
          ON CONFLICT DO NOTHING;

          INSERT INTO userBooks (userId, bookId)
          VALUES ${userData}
          ON CONFLICT DO NOTHING;
      COMMIT;
      `);
    });
}

function bookApi(id) {
  return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
}

function bookData(bookObj, userId) {
  const bookInfo = bookObj.volumeInfo;
  const bookData = {
    bookId: bookObj.id,
    title: bookInfo.title || '',
    publisher: bookInfo.publisher || '',
    searchInfo: bookInfo.subtitle || '',
    pageCount: bookInfo.pageCount || 0,
    maturityRating: bookInfo.maturityRating || 'NOT_MATURE',
    thumbnail: bookInfo.imageLinks.thumbnail || '',
    buyLink: bookInfo.buyLink || 'N/A',
  };
  const authorData = bookInfo.authors ? bookInfo.authors.map((author) => "($$" + author + "$$,'" + bookData.bookId + "')").join(', ') : "('','"+bookData.bookId + "')";
  const categData = bookInfo.categories ? bookInfo.categories.map((category) => "($$" + category + "$$,'" + bookData.bookId + "')").join(', ') : "('','"+bookData.bookId + "')";
  const userData = "(" + userId + ", '" + bookData.bookId + "')";
  const bookCols = Object.keys(bookData).join(', ');
  const bookVals = Object.values(bookData).map((val) => typeof val === 'string' ? "$$" + val + "$$" : val).join(', ');
  // console.log(bookVals);
  return {
    userData,
    authorData,
    categData,
    bookCols,
    bookVals,
  };
};

addReadingBookRouter.post('/:bookId', (req, res) => {
  let bookId = req.params.bookId;
  let userId = req.session.userId;
  insertBook(bookId, userId)
    .then((dbRes) => {
      res.status(200).send(dbRes);
    }).catch((err) => {
      console.log('end err: ', err);
      res.status(500).send(err);
    });
});

module.exports = addReadingBookRouter;
