"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Tarea extends Model {
  //una tarea pertenece a un project
  project() {
    return this.belongsTo("App/Models/Project");
  }
}

module.exports = Tarea;
