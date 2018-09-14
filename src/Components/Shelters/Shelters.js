import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Shelters.css";

import axios from "axios";
import Nav from "../Nav/Nav";

const API_KEY = "8b5f42ac4293d90c5c5cf549de61e57a";

class Shelters extends Component {
  state = {
    shelters: null
  };

  componentDidMount = () => {
    const location = this.props.location.state.input;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?format=json&key=${API_KEY}&location=${location}&count=15`
      )
      .then(res =>
        this.setState({
          shelters: res.data.petfinder.shelters.shelter
        })
      )

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Shelters">
        <Nav />
        <h2>Showing Search Results for '{this.props.location.state.input}'</h2>
        {this.state.shelters !== null
          ? this.state.shelters.map(shelter => {
              return (
                <div className="Shelter" key={shelter.id.$t}>
                  <section>
                    <Link
                      to={{
                        pathname: `/shelters/shelter.id.$`,
                        state: {
                          id: shelter.id.$t,
                          name: shelter.name.$t,
                          phone: shelter.phone.$t,
                          email: shelter.email.$t
                        }
                      }}
                    >
                      {" "}
                      <h3>{shelter.name.$t}</h3>
                    </Link>

                    <h4>{shelter.address1.$t}</h4>
                    <h4>
                      {shelter.city.$t},{shelter.state.$t} {shelter.zip.$t}
                    </h4>
                  </section>
                  <h4>{shelter.email.$t}</h4>
                  <h4>{shelter.phone.$t}</h4>
                  <hr />
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Shelters;
