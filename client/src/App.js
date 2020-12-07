import './App.css';
import React, { useState } from "react";
import Row from "./components/Row/row";
import Banner from "./components/Banner/banner";
import Navbar from "./components/Navbar/nav";
import requests from "./utils/requests";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
   return (
    <Router>
      <Switch>
        <div className="app">
          <Route expact path = "/">
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
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;