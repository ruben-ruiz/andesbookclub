import React from 'react';
import {
  ListGroup, ListGroupItem,
} from 'reactstrap';
import axios from 'axios';
import parse from 'html-react-parser';
import Image from './MainInfo';
import QuestionsModal from './questionsSubmitModal';

class bookInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completedReading: false,
    };
    this.showQuestions = this.showQuestions.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes/qtsTH7ekvVYC',
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
      description, title, subtitle, author, thumbnail,
    } = this.state;
    const dataArr = [title, subtitle, author, thumbnail];
    // const { completedReading } = this.state;
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
        <QuestionsModal modalOrAlert={showQuestions} />
      </div>
    );
  }
}

export default bookInfo;
