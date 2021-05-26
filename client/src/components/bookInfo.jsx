import React from 'react';
import {
  Button, ListGroup, ListGroupItem,
} from 'reactstrap';
import axios from 'axios';
import parse from 'html-react-parser';
import Image from './MainInfo';
import SubmitQuestion from './SubmitQuestion';

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
          author: data.author,
          releaseYear: data.publishedDate,
          description: data.description,
          categories: data.categories,
          publisher: data.publisher,
          pageCount: data.pageCount,
          thumbnail: data.imageLinks.smallThumbnail,
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
      showQuestions, showAlert, releaseYear, categories, publisher, pageCount,
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
        <Button
          color="warning"
          onClick={this.showQuestions}
        >
          Add A Question!
        </Button>
        {showQuestions ? <SubmitQuestion /> : null}
        {showAlert ? (
          <div>
            You must finish reading this book before you can submit questions for it!
            <button type="button">
              got it!
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default bookInfo;
