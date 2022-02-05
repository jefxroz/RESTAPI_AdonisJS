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

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
}),
  Route.post("user/register", "UserController.store");

//creando agrupador de funciones mediante el prefijo
Route.group(() => {
  Route.get("user/reg", "UserController.store");
  Route.post("user/register", "UserController.store");
}).prefix("api/v1/");
