const express = require("express");
const Router = express.Router();

const MovieController = require("./controllers/MovieController");
const CategoryController = require("./controllers/CategoryController");

Router.get("/", (req, res) => {
  res.send("Hello NODE");
});

// movies
Router.post("/movies", MovieController.salvarFilme);
Router.get("/movies", MovieController.obterTodos);
Router.get("/movies/:id", MovieController.obterPorId);
Router.get(
  "/movies/categories/:category",
  MovieController.obterTodosPorCategoria
);

// categories
Router.post("/categories", CategoryController.salvarCategoria);
// rota para obter todas as categorias

module.exports = Router;
