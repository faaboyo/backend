const UserService = require("../services/user.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getUsers = asyncHandler(async (req, res) => {
  const params = req.query;
  const users = await UserService.getUsers(params);
  return http.response200(res, users);
});

const getUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await UserService.getUser(id);
  return http.response200(res, user);
});

const createUser = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const user = await UserService.createUser(payload);
  return http.response201(res, user);
});

const updateUser = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const user = await UserService.updateUser(payload);
  return http.response200(res, user);
});

const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await UserService.deleteUser(id);
  return http.response200(res);
});

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};