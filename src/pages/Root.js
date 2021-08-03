import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagesPromotionSearch from "./Promotion/Search/Search";
import PagesPromotionForm from "./Promotion/Form/Form";
const Root = () => {
  return (
    <Router>
      <switch>
        <Route path="/create" component={PagesPromotionForm} />
        <Route path="/edit/:id" component={PagesPromotionForm} />
        <Route path="/" component={PagesPromotionSearch} />
      </switch>
    </Router>
  );
};

export default Root;
