'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TareaSchema extends Schema {
  up () {
    this.create('tareas', (table) => {
  table.increments();
  table.integer("project_id").unsigned().references("id").inTable("project");
  table.string("descripcion", 255).notNullable();
  table.boolean("completada").defaultTo(false);
  table.timestamps();
    })
  }

  down () {
    this.drop('tareas')
  }
}

module.exports = TareaSchema
