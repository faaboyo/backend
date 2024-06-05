
"use strict";

const { proveedor: Proveedor } = require("../models");

class ProveedorService {
  static async getProveedores(params) {
    return await Proveedor.findAll(params);
  }

  static async getProveedor(id) {
    return await Proveedor.findOne({ where: { id } });
  }

  static async createProveedor(proveedor) {
    return await Proveedor.create({
      nombre: proveedor.nombre,
      descripcion: proveedor.descripcion,
      precio: proveedor.precio
    });
  }

  static async updateProveedor(proveedor) {
    const instance = await this.getProveedor(proveedor.id);

    if (!instance) return null;

    return instance.update({
      nombre: proveedor.nombre,
      descripcion: proveedor.descripcion,
      precio: proveedor.precio
    });
  }

  static async deleteProveedor(id) {
    const instance = await this.getProveedor(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = ProveedorService;
