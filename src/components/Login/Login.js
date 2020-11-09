import React, { useState } from 'react';
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import { Form, Input, Button, Card, Error } from "../../components/AuthForm/AuthForm";
import { useAuth } from "../../context/auth";
import axios from 'axios';

function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postLogin() {
        // axios.post("https://www.somePlace.com/auth/login", {
        //     username,
        //     password
        // }).then(result => {
        //     if (result.status===200) {
        //         setAuthTokens(result.data);
        //         setLoggedIn(true);
        //     } else {
        //         setIsError(true)
        //     }
        // }).catch(e => {
        //     setIsError(e);
        // });
        setLoggedIn(true);
    };

    if (isLoggedIn) {
        return <Redirect to="/home" />;
    }

    return (
        <Card>
            <Form>
                <Input type="email" placeholder="email" onChange={e => setUsername(e.target.value)}/>
                <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <Link to="/signup">Don't have an account?</Link>
            { isError &&<Error>The username or password provided are incorrect!</Error>}
        </Card>
    );
}

export default Login