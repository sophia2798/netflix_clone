import './App.css';
import React, { useState } from "react";
import Row from "./components/Row/row";
import Banner from "./components/Banner/banner";
import Navbar from "./components/Navbar/nav";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import requests from "./utils/requests";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = data => {
    localStorage.getItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

   return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <Switch>
        <div className="app">
          <PrivateRoute expact path = "/home">
            <Navbar />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
          </PrivateRoute>
          <Route exact path = "/" component={Login} />
          <Route path = "/signup" component={Signup}/>
        </div>
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;