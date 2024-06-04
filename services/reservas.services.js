const Reserva = require("../models").index;

class IndexService {
  static async getIndexes(params) {
    return await Reserva.findAll(params);
  }

  static async getIndex(id) {
    return await Reserva.findOne({ where: { id } });
  }

  static async createIndex(index) {
    return await Reserva.create({
      nombre: index.nombre,
      biografia: index.biografia,
    });
  }

  static async updateIndex(index) {
    const instance = await this.getIndex(index.id);

    if (!instance) return null;

    return instance.update({
      nombre: index.nombre,
      biografia: index.biografia
    });
  }

  static async deleteIndex(id) {
    const instance = await this.getIndex(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = IndexService;
