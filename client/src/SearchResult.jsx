import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import propTypes from 'prop-types';
import SearchList from './SearchList';

class SearchResult extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.setInitialPage = this.setInitialPage.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  setInitialPage() {
    const { title } = this.props;
    axios.get(`/books/${title}`, { params: 1 })
      .then((response) => {
        this.setState({
          items: response.data.items,
        });
      })
      .catch();
  }

  setCurrentPage(page) {
    const { title } = this.props;
    axios.get(`/books/${title}`, { params: page.selected * 10 + 1 })
      .then((response) => {
        this.setState({
          items: response.data.items,
        });
      })
      .catch();
  }

  render() {
    const { data } = this.props;
    const pageNum = Math.ceil(data / 10);
    const { items } = this.state;
    if (items.length === 0) {
      this.setInitialPage();
    }
    return (
      <div className="result-page">
        <div className="search-total">
          Total results:
          {' '}
          {data}
        </div>
        <div className="search-list">
          <SearchList items={items} />
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={pageNum}
            containerClassName="pagination"
            previousLinkClassName="pagination__link"
            nextLinkClassName="pagination__link"
            disabledClassName="pagination__link--disabled"
            activeClassName="pagination__link--active"
            onPageChange={this.setCurrentPage}
          />
        </div>
      </div>
    );
  }
}

SearchResult.propTypes = {
  data: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
};

export default SearchResult;
