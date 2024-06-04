const Proveedores = require("../models").proveedores;

class ProveedoresService {
  static async getProveedores(params) {
    return await Proveedores.findAll(params);
  }

  static async getProveedor(id) {
    return await Proveedores.findOne({ where: { id } });
  }

  static async createProveedor(proveedor) {
    return await Proveedores.create({
      nombre: proveedor.nombre,
      biografia: proveedor.biografia,
    });
  }

  static async updateProveedor(proveedor) {
    const instance = await this.getProveedor(proveedor.id);

    if (!instance) return null;

    return instance.update({
      nombre: proveedor.nombre,
      biografia: proveedor.biografia
    });
  }

  static async deleteProveedor(id) {
    const instance = await this.getProveedor(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = ProveedoresService;
