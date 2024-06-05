"use strict";

const Reserva = require("../models").reserva;

class ReservaService {
  static async getReservas(params) {
    return await Reserva.findAll(params);
  }

  static async getReserva(id) {
    return await Reserva.findOne({ where: { id } });
  }

  static async createReserva(Reserva) {
    return await Reserva.create({
      nombre: reserva.nombre,
      descripcion: reserva.descripcion,
      precio: reserva.precio
    });
  }

  static async updateReserva(Reserva) {
    const instance = await this.getReserva(Reserva.id);

    if (!instance) return null;

    return instance.update({
      nombre: reserva.nombre,
      descripcion: reserva.descripcion,
      precio: reserva.precio
    });
  }

  static async deleteReserva(id) {
    const instance = await this.getReserva(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = ReservaService;
