"use strict";

const Producto = require("../models").producto;

class ProductoService {
  static async getProductos(params) {
    return await Producto.findAll(params);
  }

  static async getProducto(id) {
    return await Producto.findOne({ where: { id } });
  }

  static async createProducto(producto) {
    return await Producto.create({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio // Asumiendo que hay un campo de biografía para productos/s
    });
  }

  static async updateProducto(producto) {
    const instance = await this.getProducto(producto.id);

    console.log("producto en servicio", producto)
    if (!instance) return null;

    

    return instance.update({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio
    });
  }

  static async deleteProducto(id) {
    const instance = await this.getProducto(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = ProductoService;
