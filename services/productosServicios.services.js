const ProductoServicio = require("../models").productos_servicios;

class ProductoServicioService {
  static async getProductosServicios(params) {
    return await ProductoServicio.findAll(params);
  }

  static async getProductoServicio(id) {
    return await ProductoServicio.findOne({ where: { id } });
  }

  static async createProductoServicio(productoServicio) {
    return await ProductoServicio.create({
      nombre: productoServicio.nombre,
      biografia: productoServicio.biografia, // Asumiendo que hay un campo de biografía para productos/servicios
    });
  }

  static async updateProductoServicio(productoServicio) {
    const instance = await this.getProductoServicio(productoServicio.id);

    if (!instance) return null;

    return instance.update({
      nombre: productoServicio.nombre,
      biografia: productoServicio.biografia
    });
  }

  static async deleteProductoServicio(id) {
    const instance = await this.getProductoServicio(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = ProductoServicioService;
