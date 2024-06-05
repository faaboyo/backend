const ProveedorService = require("../services/Proveedor.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getProveedores = asyncHandler(async (req, res) => {
  const params = req.query;
  const proveedores = await ProveedoresService.getProveedores(params);
  return http.response200(res, proveedores);
});

const getProveedor = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const proveedor = await ProveedorService.getProveedor(id);
  return http.response200(res, proveedor);
});

const createProveedor = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const proveedor = await ProveedorService.createProveedor(payload);
  return http.response201(res, proveedor);
});

const updateProveedor = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const proveedor = await ProveedorService.updateProveedor(payload);
  return http.response200(res, proveedor);
});

const deleteProveedor = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await ProveedorService.deleteProveedor(id);
  return http.response200(res);
});

module.exports = {
  getProveedores,
  getProveedor,
  createProveedor,
  updateProveedor,
  deleteProveedor,
};

