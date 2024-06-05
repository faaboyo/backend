"use strict";

const Evento = require("../models").evento;


class EventoService {
  static async getEventos(params) {
    return await Evento.findAll(params);
  }

  static async getEvento(id) {
    return await Evento.findOne({ where: { id } });
  }
  

  static async createEvento(evento) {
    console.log(evento)
    return await Evento.create({
      nombre: evento.nombre,
      descripcion: evento.descripcion,
      precio: evento.precio
    });
  }

  static async updateEvento(evento) {
    const instance = await this.getEvento(evento.id);

    if (!instance) return null;

    return instance.update({
      nombre: evento.nombre,
      descripcion: evento.descripcion,
      precio: evento.precio
    });
  }

  static async deleteEvento(id) {
    const instance = await this.getEvento(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = EventoService;
