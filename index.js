import express from "express";
//  can also write const express = require ('express');
import bodyParser from "body-parser";
// bodyParser allows us to take incoming post request bodies
import usersRoutes from "./routes/routes.js"
const app =express();
// Now our whole appliaction lies in this little variable
const PORT = 5000;
// specifying port of our aplication , you can choose any port 
app.use(bodyParser.json)
//it says we are going to use json data in our body
app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));

app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`)); 
//To listen to this port and a callback function 



