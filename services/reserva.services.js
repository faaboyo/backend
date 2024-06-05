"use strict";

const { reserva: Reserva } = require("../models");

class ReservaService {
  static async getReservas(params) {
    return await Reserva.findAll(params);
  }

  static async getReserva(id) {
    return await Reserva.findOne({ where: { id } });
  }

  static async createReserva(reserva) {
    return await Reserva.create({
      nombre: reserva.nombre,
      descripcion: reserva.descripcion,
      precio: reserva.precio
    });
  }

  static async updateReserva(reserva) {
    const instance = await this.getReserva(reserva.id);

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
