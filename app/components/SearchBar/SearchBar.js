import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.href = '/results?postcode=' + this.state.value;
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={`row flex-nowrap justify-content-between align-items-center text-white rounded bg-dark py-3`}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Postcode:
            <input type="text" value={this.state.value} onChange={this.handleChange} autoFocus={true} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
