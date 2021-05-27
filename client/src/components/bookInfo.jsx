import React from 'react';
import {
  ListGroup, ListGroupItem,
} from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import Image from './MainInfo';
import QuestionsModal from './questionsSubmitModal';

class bookInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completedReading: true,
    };
    this.showQuestions = this.showQuestions.bind(this);
    this.routeParam = props.match.params.bookid;
  }

  componentDidMount() {
    console.log('the thing', this.routeParam);

    axios({
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes/${this.routeParam}`,
    })
      .then((response) => {
        // console.log('this is the response: ', response.data.volumeInfo);
        const data = response.data.volumeInfo;
        this.setState({
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
        });
        return response.data.id;
      })
      .then((bookId) => {
        axios.get(`/books/isCompleted/${bookId}`)
          .then((res) => {
            this.setState({
              completedReading: res.data,
            });
          });
      });
    this.showQuestions();
  }

  showQuestions() {
    const { completedReading, showQuestions, showAlert } = this.state;
    if (completedReading) {
      this.setState({
        showQuestions: !showQuestions,
      });
    } else {
      this.setState({
        showAlert: !showAlert,
      });
    }
  }

  render() {
    const {
      showQuestions, releaseYear, categories, publisher, pageCount,
      description, title, subtitle, author, thumbnail, bookId,
    } = this.state;
    const dataArr = [title, subtitle, author, thumbnail];
    // const { completedReading } = this.state;
    console.log(bookId);
    return (
      <div>
        <Image data={dataArr} />
        <ListGroup>
          <ListGroupItem>
            Publish Date:
            {` ${releaseYear}`}
          </ListGroupItem>
          <ListGroupItem>
            Categories:
            {` ${categories}`}
          </ListGroupItem>
          <ListGroupItem>
            Publisher:
            {` ${publisher}`}
          </ListGroupItem>
          <ListGroupItem>
            Page Count:
            {` ${pageCount}`}
          </ListGroupItem>
        </ListGroup>
        <div>
          {description ? parse(description) : null}
        </div>
        <QuestionsModal modalOrAlert={showQuestions} bookId={bookId} />
      </div>
    );
  }
}

export default bookInfo;
