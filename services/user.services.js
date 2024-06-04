const Users = require("../models").user;

class UserService {
  static async getUsers(params) {
    return await Users.findAll(params);
  }

  static async getUser(id) {
    return await Users.findOne({ where: { id } });
  }

  static async createUser(user) {
    return await Users.create({
      nombre: user.nombre,
      biografia: user.biografia,
    });
  }

  static async updateUser(user) {
    const instance = await this.getUser(user.id);

    if (!instance) return null;

    return instance.update({
      nombre: user.nombre,
      biografia: user.biografia
    });
  }

  static async deleteUser(id) {
    const instance = await this.getUser(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = UserService;
