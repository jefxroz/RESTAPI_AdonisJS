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
  Route.get("projects", "ProjectController.index");
  Route.post("projects", "ProjectController.create");
  Route.patch("projects/:id", "ProjectController.update");
  Route.delete("project/:id", "ProjectController.destroy");

  //tareas
  Route.get("projects/:id/tareas", "TareaController.index");
  Route.post("projects/:id/tareas", "TareaController.create");
  Route.patch("tareas/:id", "TareaController.update");
  Route.delete("tareas/:id", "TareaController.destroy");
})
  .prefix("api/v1/")
  .middleware("auth");
