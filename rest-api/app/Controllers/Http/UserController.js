"use strict";
const User = use('App/Models/User');

class UserController {
  //segun estandard
  async store({ request }) {
    const { email, password } = request.all();

    console.log(request);

  const user = await User.create({
      password,
      email,
      username: email,
    }); //new registro
    return user;
  }; //almacena registro

}

module.exports = UserController;
