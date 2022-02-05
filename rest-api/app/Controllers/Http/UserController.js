"use strict";
const User = use("App/Models/User");

class UserController {
  //segun estandard
  async store({ request }) {
    const { email, password } = request.all(); //slc req

    console.log(request);

    const user = await User.create({
      password,
      email,
      username: email,
    }); //new registro
    return this.login(...arguments);
  } //almacena registro

  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = UserController;
