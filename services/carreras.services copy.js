const Carrera = require("../models").carreras;

class CarreraService {
  static async getCarreras(params) {
    return await Carrera.findAll(params);
  }

  static async getCarrera(id) {
    return await Carrera.findOne({ where: { id } });
  }

  static async createCarrera(carrera) {
    return await Carrera.create({
      nombre: carrera.nombre,
      descripcion: carrera.descripcion, // Asumiendo que hay un campo de descripción para carreras
    });
  }

  static async updateCarrera(carrera) {
    const instance = await this.getCarrera(carrera.id);

    if (!instance) return null;

    return instance.update({
      nombre: carrera.nombre,
      descripcion: carrera.descripcion,
    });
  }

  static async deleteCarrera(id) {
    const instance = await this.getCarrera(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = CarreraService;
