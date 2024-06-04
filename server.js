const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { sequelize } = require('./models');

class Server {
  constructor() {
    this.init();
    this.app = express();
    this.port = process.env.PORT || 3002;
    this.host = process.env.HOST || 'localhost';
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  init() {
    dotenv.config();
    sequelize.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  }

  middlewares() {
    const corsOptions = {
      origin: "*",
    };

    this.app.use(cors(corsOptions));
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(morgan("combined"));
  }

  routes() {
    this.app.use("/api", require("./routes"));
    this.app.get("/", (req, res) => {
      res.send("Servidor en funcionamiento");
    });
  }

  errorHandler() {
    // Manejo de errores personalizados
    this.app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

    // Manejo de errores 404
    this.app.use((req, res, next) => {
      res.status(404).send("Sorry, that route doesn't exist.");
    });
  }

  listen() {
    const server = this.app.listen(this.port, this.host, (err) => {
      if (err) {
        console.log("Error al iniciar el servidor:");
        console.error(err);
        process.exit(1);
      }

      console.log(`El servidor está en ejecución en ${this.host}:${server.address().port}`);
    });
  }
}

module.exports = Server;
