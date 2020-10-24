import React from "react";
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from "./components/RegistrationPage";
import { ProductsPage } from "./components/ProductsPage";
import { ProductPage } from "./components/ProductPage";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

function App() {
  return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <BrowserRouter>
              <Switch>
                  <Route path="/login" component={LoginPage} />
                  <Route path="/registration" component={ RegistrationPage } />
                  <Route path="/products-page" component={ ProductsPage } />
                  <Route path="/product/:name" component={ ProductPage } />
                  <Redirect from='/' to='/login' />
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
