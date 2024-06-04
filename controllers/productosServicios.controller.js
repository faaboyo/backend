const ProductosServiciosService = require("../services/productosServicios.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getProductosServicios = asyncHandler(async (req, res) => {
  const params = req.query;
  const productosServicios = await ProductosServiciosService.getProductosServicios(params);
  return http.response200(res, productosServicios);
});

const getProductoServicio = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const productoServicio = await ProductosServiciosService.getProductoServicio(id);
  return http.response200(res, productoServicio);
});

const createProductoServicio = asyncHandler(async (req, res) => {
  const payload = req.body;
  const productoServicio = await ProductosServiciosService.createProductoServicio(payload);
  return http.response201(res, productoServicio);
});

const updateProductoServicio = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;
  const productoServicio = await ProductosServiciosService.updateProductoServicio(payload);
  return http.response200(res, productoServicio);
});

const deleteProductoServicio = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await ProductosServiciosService.deleteProductoServicio(id);
  return http.response200(res);
});

module.exports = {
  getProductosServicios,
  getProductoServicio,
  createProductoServicio,
  updateProductoServicio,
  deleteProductoServicio,
};
