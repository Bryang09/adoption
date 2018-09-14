import React, { Component } from "react";

import axios from "axios";

import Nav from "../Nav/Nav";

import "../Shelters/Shelter/Shelter.css";

const API_KEY = "8b5f42ac4293d90c5c5cf549de61e57a";

class Pets extends Component {
  state = {
    zip: this.props.location.state.zip,
    animal: this.props.location.state.animal,
    results: null
  };

  componentWillMount = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=${API_KEY}&animal=${
          this.state.animal
        }&location=${this.state.zip}&count=100`
      )
      .then(res => this.setState({ results: res.data.petfinder.pets.pet }))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state.results);
    return (
      <div className="Pets">
        <div className="heading">
          <Nav />
          <h2
            style={{
              textTransform: "capitalize",
              fontWeight: "400",
              paddingLeft: "2vw"
            }}
          >
            Showing Results for {this.state.animal}s near {this.state.zip}
          </h2>
          <hr />
        </div>
        <section className="Results">
          <div className="results">
            {this.state.results
              ? this.state.results
                  .filter(par => par.media.photos)
                  .map(result => {
                    return (
                      <div className="result" key={result.id.$t}>
                        <img
                          src={result.media.photos.photo[2].$t}
                          alt={result.name.$t}
                        />
                        <div className="description">
                          {/* NAME */}
                          <h4
                            id="Name"
                            style={{
                              textTransform: "capitalize"
                            }}
                          >
                            {result.name.$t.toLowerCase()}({result.age.$t})
                          </h4>
                          {/* SEX */}
                          <h4>
                            Sex: <span>{result.sex.$t}</span>
                          </h4>
                          {/* BREED */}
                          <h4>
                            Breed(s):{" "}
                            <span>
                              {result.breeds.breed.$t ||
                                result.breeds.breed[0].$t}{" "}
                              {result.breeds.breed[1]
                                ? "/ " + result.breeds.breed[1].$t
                                : null}
                            </span>
                          </h4>
                          {/* SIZE */}
                          <h4>
                            Size: <span>{result.size.$t}</span>
                          </h4>
                          {/* UNIQUE ID */}
                          {result.shelterPetId.$t ? (
                            <h4>
                              Unique Id: <span>{result.shelterPetId.$t}</span>
                            </h4>
                          ) : null}
                          {/* CONTACT QUESTION */}
                          <h4>
                            Interested In{" "}
                            <span
                              style={{
                                textTransform: "capitalize",
                                color: "#124d9fcc"
                              }}
                            >
                              {result.name.$t.toLowerCase()}?{" "}
                            </span>
                          </h4>
                          {/* CONTACT INFO */}
                          <ul>
                            {result.contact.phone.$t > 0 ? (
                              <li>
                                <b>Phone: </b>
                                <span>{result.contact.phone.$t}</span>
                              </li>
                            ) : null}
                            {result.contact.email.$t ? (
                              <li>
                                <b>Email: </b>
                                <span>{result.contact.email.$t}</span>
                              </li>
                            ) : null}
                            {result.contact.email.$t ? (
                              <li>
                                <b>Phone Number: </b>
                                <span>{result.contact.phone.$t}</span>
                              </li>
                            ) : null}
                            {result.contact.email.$t ? (
                              <li>
                                <b>Zip Code:</b>
                                <span>{result.contact.zip.$t}</span>
                              </li>
                            ) : null}
                          </ul>
                          {result.shelterPetId.$t ? (
                            <h6>
                              <i>
                                *For faster service, have the Unique Id ready
                              </i>
                            </h6>
                          ) : null}
                        </div>
                      </div>
                    );
                  })
              : null}
          </div>
        </section>
      </div>
    );
  }
}

export default Pets;
