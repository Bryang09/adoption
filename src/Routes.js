import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
// import Dogs from "./Components/Shelters/Shelter/Dogs/Dogs";
// import Cats from "./Components/Shelters/Shelter/Cats/Cats";
import Shelters from "./Components/Shelters/Shelters";
import Shelter from "./Components/Shelters/Shelter/Shelter";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/shelters" component={Shelters} />
    <Route exact path="/shelters/:id" component={Shelter} />
    {/* <Route exact path="/shelters/:id/dogs" component={Dogs} /> */}
    {/* <Route exact path="/shelters/:id/cats" component={Cats} /> */}
  </Switch>
);

export default Routes;
