import './App.css';
import React, { useState, useEffect } from "react";
import Row from "./components/Row/row";
import Banner from "./components/Banner/banner";
import Navbar from "./components/Navbar/nav";
import Signin from "./components/Signin/signin";
import requests from "./utils/requests";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
});
const [profileState, setProfileState] = useState({
    email: "",
    token: "",
    id: "",
    isLoggedIn: false
});

const API = {
    getProfile: function(token) {
        return fetch("/api/users/protected", {
          headers: {
            "authorization": `Bearer ${token}`
          }
        }).then(res => res.json()).catch(err => null)
    },
    login: function(userData) {
        return fetch("/api/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        }).then(res => res.json()).catch(err => null)
    }
};

function fetchUserData() {
    const token = localStorage.getItem("token");
    API.getProfile(token).then(profileData => {
        if (profileData) {
            setProfileState({
                email: profileData.email,
                token: token,
                id: profileData.id,
                isLoggedIn: true
            })
        } else {
            localStorage.removeItem("token");
            setProfileState({
                email: "",
                token: "",
                id: "",
                isLoggedIn: false
            })
        }
    })
};

const inputChange = event => {
    const { name, value } = event.target;
    setFormState({
        ...formState,
        [name]: value
    });
};

const formSubmit = event => {
    event.preventDefault();
    API.login(formState).then(newToken => {
        localStorage.setItem("token", newToken.token)
        API.getProfile(newToken.token).then(profileData => {
            setProfileState({
                email: profileData.email,
                id: profileData.id,
                isLoggedIn: true
            });
            setFormState({
                email: "",
                password: ""
            })
        })
    })
};

useEffect(fetchUserData, []);

   return (
    <Router>
        <div className="app">
        <Switch>
          <Route exact path = "/">
            <Redirect to = "signin"/>
          </Route>
          <Route path = "/browse">
            {profileState.isLoggedIn ? (
            <div>
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
            </div>              
            ):(
            <Redirect to = "/signin"/>
            )}
          </Route>
          <Route path = "/signin">
            {profileState.isLoggedIn ? (
              <Redirect to = "/browse"/>
            ):(
              <Signin
              formSubmit = {formSubmit}
              inputChange = {inputChange}
              formState = {formState}
            />
            )}
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;