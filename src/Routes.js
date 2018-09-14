import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Shelters from "./Components/Shelters/Shelters";
import Shelter from "./Components/Shelters/Shelter/Shelter";
import PetSearch from "./Components/PetSearch/PetSearch";
import Pets from "./Components/Pets/Pets";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/shelters" component={Shelters} />
    <Route exact path="/shelters/:id" component={Shelter} />
    <Route exact path="/petfind" component={PetSearch} />
    <Route exact path="/pets" component={Pets} />
  </Switch>
);

export default Routes;
