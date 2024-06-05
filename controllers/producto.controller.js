const ProductoService = require("../services/producto.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getProductos = asyncHandler(async (req, res) => {
  const params = req.query;
  const productos = await ProductoService.getProductos(params);
  return http.response200(res, productos);
});

const getProducto = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const producto = await ProductoService.getProducto(id);
  return http.response200(res, producto);
});

const createProducto = asyncHandler(async (req, res) => {
  const payload = req.body;
  const producto = await ProductoService.createProducto(payload);
  return http.response201(res, producto);
});

const updateProducto = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;
  const producto = await ProductoService.updateProducto(payload);
  return http.response200(res, producto);
});

const deleteProducto = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await ProductoService.deleteProducto(id);
  return http.response200(res);
});

module.exports = {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
};
