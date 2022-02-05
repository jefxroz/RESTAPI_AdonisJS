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
  /*USR*/
  Route.get("user/reg", "UserController.store");

  Route.post("user/register", "UserController.store");
  /*LGN*/
  Route.post("user/login", "UserController.login");

  /*Rutas de los project */
  Route.get(
    "project",
    "ProjectController.index"
  ) /* .middleware("auth") add ATH TO TRA*/;
  Route.post("project", "ProjectController.create");
  Route.patch("project/:id", "ProjectController.update");
  Route.delete("project/:id", "ProjectController.destroy");
})
  .prefix("api/v1/")
  .middleware("auth");
