const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
const allRoutes = require("./controllers");
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')); // serve the static react app
    app.get('/api', (req, res) => { // don't serve api routes to react app
      res.sendFile(path.join(__dirname, './client/build', 'index.html'));
    });
    // console.log('Serving React App...');
}

app.use("/api", allRoutes);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log(`App listening on PORT ${PORT}`);
    });
});