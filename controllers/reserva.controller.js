const ReservaService = require("../services/reserva.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getReservas = asyncHandler(async (req, res) => {
  const params = req.query;
  const reservas = await ReservaService.getReservas(params);
  return http.response200(res, reservas);
});

const getReserva = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const reserva = await ReservaService.getReserva(id);
  return http.response200(res, reserva);
});

const createReserva = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const reserva = await ReservaService.createReserva(payload);
  return http.response201(res, reserva);
});

const updateReserva = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const reserva = await ReservaService.updateReserva(payload);
  return http.response200(res, reserva);
});

const deleteReserva = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await ReservaService.deleteReserva(id);
  return http.response200(res);
});

module.exports = {
  getReservas,
  getReserva,
  createReserva,
  updateReserva,
  deleteReserva,
};
