const EventoService = require("../services/evento.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");


const getEventos = asyncHandler(async (req, res) => {
  const params = req.query;
  const eventos = await EventoService.getEventos(params);
  return http.response200(res, eventos);
});

const getEvento = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const evento = await EventoService.getEvento(id);
  return http.response200(res, evento);
});

const createEvento = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const evento = await EventoService.createEvento(payload);
  return http.response201(res, evento);
});

const updateEvento = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const evento = await EventoService.updateEvento(payload);
  return http.response200(res, evento);
});

const deleteEvento = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await EventoService.deleteEvento(id);
  return http.response200(res);
});



module.exports = {
  getEventos,
  getEvento,
  createEvento,
  updateEvento,
  deleteEvento,
};
