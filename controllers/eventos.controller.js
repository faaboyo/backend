const EventoService = require("../services/evento.services"); // Cambiado
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getEventos = asyncHandler(async (req, res) => { // Cambiado
  const params = req.query;
  const eventos = await EventoService.getEventos(params); // Cambiado
  return http.response200(res, eventos); // Cambiado
});

const getEvento = asyncHandler(async (req, res) => { // Cambiado
  const id = req.params.id;
  const evento = await EventoService.getEvento(id); // Cambiado
  return http.response200(res, evento); // Cambiado
});

const createEvento = asyncHandler(async (req, res) => { // Cambiado
  const payload = req.body;
  
  const evento = await EventoService.createEvento(payload); // Cambiado
  return http.response201(res, evento); // Cambiado
});

const updateEvento = asyncHandler(async (req, res) => { // Cambiado
  const payload = req.body;
  payload.id = req.params.id;

  const evento = await EventoService.updateEvento(payload); // Cambiado
  return http.response200(res, evento); // Cambiado
});

const deleteEvento = asyncHandler(async (req, res) => { // Cambiado
  const id = req.params.id;

  await EventoService.deleteEvento(id); // Cambiado
  return http.response200(res); // Cambiado
});

module.exports = {
  getEventos, // Cambiado
  getEvento, // Cambiado
  createEvento, // Cambiado
  updateEvento, // Cambiado
  deleteEvento, // Cambiado
};
