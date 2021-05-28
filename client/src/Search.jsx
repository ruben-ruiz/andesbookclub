import React from 'react';
import axios from 'axios';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Form,
  FormGroup,
  Button,
} from 'reactstrap';
import SearchResult from './SearchResult';
// import css from './styles.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
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
    e.preventDefault();
    const { title } = this.state;

    axios.get(`/books/${title}`, { params: 1 })
      .then((response) => {
        this.setState({
          total: response.data.totalItems,
          items: response.data.items,
        });
      })
      .catch();
  }

  render() {
    const { total } = this.state;
    const { items } = this.state;
    const { title } = this.state;
    return (
      <div className="search-bar">
        {/* <Input
          className="search-input"
          value={title}
          onChange={this.handleSearchInput}
          onKeyPress={this.handleEnter}
          placeholder="Search!"
        /> */}
        <Form onSubmit={(e) => this.handleEnter(e)}>
          <FormGroup>
            <InputGroup>
              <Input href="/search" type="text" placeholder="Search books..." name="search" onChange={this.handleSearchInput} />
              <InputGroupAddon addonType="append">
                <Button type="submit">Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
        {
          total !== 0 && title
            ? <SearchResult data={total} title={title} results={items} />
            : null
        }
      </div>
    );
  }
}

export default Search;

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log('book search result', search);
// };

// return (
//   <Navbar expand="md">
//     <NavbarBrand href="/" className="navbar-general-brand">Ande&apos;s Bookclub</NavbarBrand>
{/* <Form onSubmit={(e) => handleSubmit(e)}>
<FormGroup>
  <InputGroup>
    <Input href="/search" type="text" placeholder="Search books..." name="search" onChange={(e) => setSearch(e.target.value)} />
    <InputGroupAddon addonType="append">
      <Button href="/search" type="submit">Search</Button>
    </InputGroupAddon>
  </InputGroup>
</FormGroup>
</Form> */}