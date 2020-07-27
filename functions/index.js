const functions = require("firebase-functions");
const express = require("express");
const app = express();
const usersRouter = require("./api/controllers/users_controller");
const todosRouter = require("./api/controllers/todos_controller");
const journalRouter = require("./api/controllers/journal_controller");

app.use(express.json());
app.use("/users", usersRouter);
app.use("/todos", todosRouter);
app.use("/journal", journalRouter);

exports.api = functions.https.onRequest(app);

exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});

exports.setupdb = functions.https.onRequest(require("./setupDB"));
