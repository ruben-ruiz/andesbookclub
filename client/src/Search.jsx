import React from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import SearchResult from './SearchResult';
// import css from './styles.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      enter: false,
      total: 0,
      items: [],
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleSearchInput(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleEnter(e) {
    const { title } = this.state;
    if (e.key === 'Enter') {
      this.setState({
        enter: true,
      });
      axios.get(`/books/${title}`, { params: 1 })
        .then((response) => {
          this.setState({
            total: response.data.totalItems,
            items: response.data.items,
          });
        });
    }
  }

  renderView() {
    const { enter } = this.state;
    const { total } = this.state;
    const { items } = this.state;
    const { title } = this.state;
    // const { items } = JSON.stringify(info.data);
    if (enter) {
      return <SearchResult data={total} title={title} items={items} />;
    }
    return (
      <div>{' '}</div>
    );
  }

  render() {
    const { title } = this.state;
    const { enter } = this.state;
    return (
      <div className="search-bar">
        <Input
          className="search-input"
          value={title}
          onChange={this.handleSearchInput}
          onKeyPress={this.handleEnter}
          placeholder="Search"
        />
        {
          enter
            ? this.renderView(title)
            : null
        }
      </div>
    );
  }
}

export default Search;
