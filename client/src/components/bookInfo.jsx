import React, { useState, useEffect } from 'react';
import {
  ListGroup, ListGroupItem,
} from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import Info from './MainInfo';
import QuestionsModal from './questionsSubmitModal';
import BookStatus from '../widgets/BookStatus';

const bookInfo = (props) => {
  const [completedReading, setCompletedReading] = useState(false);
  const [book, setBook] = useState({});
  const [showQuestions, setShowQuestions] = useState(false);
  const dataArr = [book.title, book.subtitle, book.author, book.thumbnail];
  let status;
  if (completedReading === 'available') {
    status = 'available';
  } else {
    status = completedReading ? 'Completed' : 'Reading';
  }
  console.log('props bookid: ', props.match.params.bookid);

  useEffect(() => {
    console.log('this is the useEffect');
    axios({
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes/${props.match.params.bookid}`,
    })
      .then((response) => {
      // console.log('this is the response: ', response.data.volumeInfo);
        const data = response.data.volumeInfo;
        console.log('data inside axios get: ', data);
        const bookObj = {
          title: data.title,
          subtitle: data.subtitle,
          author: data.authors,
          releaseYear: data.publishedDate,
          description: data.description,
          categories: data.categories,
          publisher: data.publisher,
          pageCount: data.pageCount,
          thumbnail: data.imageLinks.thumbnail,
          bookId: response.data.id,
        };
        console.log('this is the bookObj: ', bookObj);
        console.log('this is the book state: ', book);
        setBook(bookObj);
        return response.data.id;
      })
      .then((bookId) => {
        axios.get(`/books/isCompleted/${bookId}`)
          .then((res) => {
            setCompletedReading(res.data);
          });
      });
  }, [props.match.params.bookid]);

  return (
    <div>
      <Info data={dataArr} />
      <BookStatus book={book} status={status} setCompletedReading={setCompletedReading} />
      <ListGroup>
        <ListGroupItem>
          Publish Date:
          {` ${book.releaseYear}`}
        </ListGroupItem>
        <ListGroupItem>
          Categories:
          {` ${book.categories}`}
        </ListGroupItem>
        <ListGroupItem>
          Publisher:
          {` ${book.publisher}`}
        </ListGroupItem>
        <ListGroupItem>
          Page Count:
          {` ${book.pageCount}`}
        </ListGroupItem>
      </ListGroup>
      <div>
        {book.description ? parse(book.description) : null}
      </div>
      <QuestionsModal modalOrAlert={completedReading} bookId={book.bookId} />
    </div>
  );
};

export default bookInfo;
