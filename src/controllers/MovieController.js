const Movie = require("./../models/Movie");
const enums = require("../enums");

class MovieController {
  async salvarFilme(req, res) {
    try {
      const { title, description, category, movieDate } = req.body;

      const movie = await Movie.create({
        title,
        description,
        category,
        movieDate
      });

      res.send(movie);
    } catch (e) {
      res.status(enums.statusCode.internalError).send({ error: e.message });
    }
  }

  async obterTodos(req, res) {
    try {
      const { title } = req.query;

      let response = [];

      if (title) {
        response = await Movie.find({
          title: { $regex: title, $options: "i" }
        }).sort("title");
      } else {
        response = await Movie.find().sort("title");
      }

      res.send(response);
    } catch (e) {
      res.status(enums.statusCode.internalError).send({ error: e.message });
    }
  }

  async obterPorId(req, res) {
    try {
      const { id } = req.params;

      const movie = await Movie.findOne({ _id: id });

      res.send(movie);
    } catch (e) {
      res.status(enums.statusCode.internalError).send({ error: e.message });
    }
  }

  async obterTodosPorCategoria(req, res) {
    try {
      const { category } = req.params;

      const movies = await Movie.find({ category }).sort("-movieDate");

      res.send(movies);
    } catch (e) {
      res.status(enums.statusCode.internalError).send({ error: e.message });
    }
  }
}

module.exports = new MovieController();
