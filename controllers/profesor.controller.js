const ProfesorService = require("../services/profesor.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getProfesores = asyncHandler(async (req, res) => {
  const params = req.query;
  const profesores = await ProfesorService.getProfesores(params);
  return http.response200(res, profesores);
});

const getProfesor = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const profesor = await ProfesorService.getProfesor(id);
  return http.response200(res, profesor);
});

const createProfesor = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const profesor = await ProfesorService.createProfesor(payload);
  return http.response201(res, profesor);
});

const updateProfesor = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const profesor = await ProfesorService.updateProfesor(payload);
  return http.response200(res, profesor);
});

const deleteProfesor = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await ProfesorService.deleteProfesor(id);
  return http.response200(res);
});

module.exports = {
  getProfesores,
  getProfesor,
  createProfesor,
  updateProfesor,
  deleteProfesor,
};
