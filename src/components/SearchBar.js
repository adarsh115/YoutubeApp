import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class SearchBar extends Component {
  state = {
    term: ""
  };

  handleInputChange = (e) => {
    this.setState({
      term: e.target.value
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // todo make sure we call callback from parent
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label
              style={{
                fontFamily: "sans-serif"
              }}
            >
              Video Search
            </label>
            <br />
            <input
              value={this.state.term}
              style={{
                border: "0.1px solid grey",
                marginTop: "5px",
                padding: "3px",
                width: "calc(150px + 10vw)"
              }}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
