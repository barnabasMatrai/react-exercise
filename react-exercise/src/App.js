import React, { useState } from "react";
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from "./components/RegistrationPage";
import { ProductsPage } from "./components/ProductsPage";
import { ProductPage } from "./components/ProductPage";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

function App(props) {
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }

  return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <BrowserRouter>
              <Switch>
                  <Route path="/login" component={LoginPage} />
                  <Route path="/registration" component={ RegistrationPage } />
                  <Route path="/products-page" component={ ProductsPage } />
                  <Route path="/product/:name" component={ ProductPage } />
                  <Redirect from='/' to='/login' />
              </Switch>
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
  );
}

export default App;
