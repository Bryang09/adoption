import React, { Component } from "react";

import "./Landing.css";

import { Link } from "react-router-dom";

import "./Form/Form.css";

class Landing extends Component {
  state = {
    input: null
  };

  getZip = e => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div className="Landing">
        <h1>Welcome To Bryan's Shelter!</h1>
        <i className="fa fa-paw fa-5x paw" />
        <h2>
          Interested in Adopting? Just want to look around? Regardless, we're
          glad to have you here! To begin, Please type in your Zip Code and we
          will find animal shelters near you!
        </h2>
        <h4>Search Shelters Near You</h4>
        <form onChange={this.getZip} className="searchBox">
          <input
            type="text"
            name="zipSearch"
            className="searchText"
            placeholder="Zip Code eg: 12345"
          />
          <Link
            to={{
              pathname: "/shelters",
              state: { input: this.state.input }
            }}
          >
            <button className="searchBtn">
              <i className="fas fa-search" />
            </button>
          </Link>
        </form>
        <Link to="/petfind">
          <h4 id="Link">Looking for Pets near you?</h4>
        </Link>
      </div>
    );
  }
}

export default Landing;
