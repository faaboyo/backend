const IndexService = require("../services/index.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getIndexes = asyncHandler(async (req, res) => {
  const params = req.query;
  const indexes = await IndexService.getIndexes(params);
  return http.response200(res, indexes);
});

const getIndex = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const index = await IndexService.getIndex(id);
  return http.response200(res, index);
});

const createIndex = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const index = await IndexService.createIndex(payload);
  return http.response201(res, index);
});

const updateIndex = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const index = await IndexService.updateIndex(payload);
  return http.response200(res, index);
});

const deleteIndex = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await IndexService.deleteIndex(id);
  return http.response200(res);
});

module.exports = {
  getIndexes,
  getIndex,
  createIndex,
  updateIndex,
  deleteIndex,
};
