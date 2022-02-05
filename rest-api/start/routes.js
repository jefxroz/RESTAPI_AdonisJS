"use strict";

const UserController = require("../app/Controllers/Http/UserController");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");


//creando agrupador de funciones mediante el prefijo
Route.group(() => {
  Route.get("user/reg", "UserController.store");

  Route.post("user/register", "UserController.store");

  Route.post("user/login", "UserController.login");
}).prefix("api/v1/");
