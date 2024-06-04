const ReservasService = require("../services/reservas.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getReservas = asyncHandler(async (req, res) => {
  const params = req.query;
  const reservas = await ReservasService.getReservas(params);
  return http.response200(res, reservas);
});

const getReserva = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const reserva = await ReservasService.getReserva(id);
  return http.response200(res, reserva);
});

const createReserva = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const reserva = await ReservasService.createReserva(payload);
  return http.response201(res, reserva);
});

const updateReserva = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const reserva = await ReservasService.updateReserva(payload);
  return http.response200(res, reserva);
});

const deleteReserva = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await ReservasService.deleteReserva(id);
  return http.response200(res);
});

module.exports = {
  getReservas,
  getReserva,
  createReserva,
  updateReserva,
  deleteReserva,
};
