import React, { Component } from "react";

import "./PetSearch.css";

import { Link } from "react-router-dom";
// import Nav from "../Nav/Nav";

class PetSearch extends Component {
  state = {
    zip: "",
    animal: null,
    animals: [
      { id: 0, type: "Dog" },
      { id: 1, type: "Cat" },
      { id: 2, type: "Barnyard" }
    ]
  };

  getZipCode = e => {
    e.preventDefault();
    this.setState({ zip: e.target.value });
  };

  render() {
    const animals = this.state.animals.map(animal => {
      return (
        <li
          key={animal.id}
          onClick={() =>
            this.setState({
              animal: animal.type.toLowerCase()
            })
          }
        >
          {animal.type}
        </li>
      );
    });
    console.log(this.state.click);
    return (
      <div className="PetSearch">
        <div className="Hero">
          <h1>Search For Animals Near You!</h1>
        </div>
        <div className="Box">
          <h3>To Begin, Please Fill Out The Form</h3>
          <hr />
          <div className="section">
            <h4>What Kind of Animal Are You Looking For?</h4>
            <ul>{animals}</ul>
            {this.state.animal ? (
              <h4>
                Got It! We'll Search for{" "}
                <span
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                    color: "#01e6ef"
                  }}
                >
                  {this.state.animal}
                  's
                </span>{" "}
                Near You
              </h4>
            ) : null}
          </div>
          <div className="section">
            <h4>What's Your Zip Code?</h4>
            <form onChange={this.getZipCode}>
              <input
                type="text"
                name="zipSearch"
                placeholder="Zip Code eg: 12345"
              />
            </form>
          </div>
          <Link
            to={{
              pathname: "/pets",
              state: { zip: this.state.zip, animal: this.state.animal }
            }}
          >
            <h5>Search</h5>
          </Link>
        </div>
      </div>
    );
  }
}

export default PetSearch;
