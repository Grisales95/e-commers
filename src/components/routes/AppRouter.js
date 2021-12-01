import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import Shop from "../../pages/Shop";
import { StoreContext } from "../../store/StoreProvider";
import NavBar from "../layout/NavBar";

const AppRouter = () => {
  const [store] = useContext(StoreContext);
  useEffect(() => {
    localStorage.setItem("shop-products", JSON.stringify(store));
  }, [store]);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <NavBar>
            <Route exact path="/Products">
              <ProductsPage />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
          </NavBar>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
