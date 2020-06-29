import express from "express";
import schema from "../schema/schema";
import graphqlHTTP from "express-graphql";
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3005;

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-iatwe.mongodb.net/graphql-tutorial?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const dbConnection = mongoose.connection;
dbConnection.on("error", err => console.log(`Connection error: ${err}`));
dbConnection.once("open", () => console.log(`Connection to DB!`));

app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));


app.listen(PORT, err => {
  err ? console.log(err) : console.log("Server started on: " + PORT + " port");
});
