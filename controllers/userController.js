const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const checkAuthStatus = request => {
    console.log(request.headers);
    if (!request.headers.authorization) {
        return false;
    }
    const token = request.headers.authorization.split(" ")[1];
    console.log(token);
    const loggedInUser = jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            return false;
        } else {
            return data;
        }
    });
    console.log(loggedInUser);
    return loggedInUser;
};

router.post("/", (req, res) => {
    db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(newUser => {
        res.json(newUser);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
});

router.post("/login", (req, res) => {
    db.User.findOne({
        where: {
            email: req.body.email,
        }
    }).then(foundUser => {
        if (!foundUser) {
            return res.status(404).send("USER NOT FOUND");
        }
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            const userTokenInfo = {
                email: foundUser.email,
                id: foundUser.id
            };
            const token = jwt.sign(userTokenInfo, process.env.JWT_SECRET, { expiresIn: "2h" });
            return res.status(200).json({ token: token });
        } else {
            return res.status(403).send("INCORRECT PASSWORD");
        }
    })
});

router.get("/protected", (req,res) => {
    const loggedInUser = checkAuthStatus(req);
    console.log(loggedInUser);
    if (!loggedInUser) {
        return res.status(401).send("INVALID TOKEN");
    }
    db.User.findOne({
        where: {
            id: loggedInUser.id
        }
    }).then(dbUser => {
        res.json(dbUser);
    }).catch(err => {
        console.log(err);
        res.status(500).send("AN ERROR OCCURED. PLEASE TRY AGAIN");
    })
});

module.exports = router;