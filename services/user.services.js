"use strict";

const User = require("../models").user;

class UserService {
  static async getUsers(params) {
    return await User.findAll(params);
  }

  static async getUser(id) {
    return await User.findOne({ where: { id } });
  }

  static async createUser(user) {
    return await User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  }

  static async updateUser(user) {
    const instance = await this.getUser(user.id);

    if (!instance) return null;

    return instance.update({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  }

  static async deleteUser(id) {
    const instance = await this.getUser(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = UserService;
