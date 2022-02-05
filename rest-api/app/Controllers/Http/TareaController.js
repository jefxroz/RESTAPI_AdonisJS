"use strict";

const Project = use("App/Models/Project");
const Tarea = use("App/Models/Tarea");
const AutorizacionService = use("App/Services/AutorizacionService");

/** Todas la tareas estan ligadas a un proyect */
class TareaController {
  async index({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    AutorizacionService.verificarPermiso(project, user);
    return await project.tareas().fetch();
  }

  async create({ auth, request, params }) {
    const user = await auth.getUser();
    const { descripcion } = request.all();
    const { id } = params;
    const project = await Project.find(id);
    //se debe de validar que USR es OWN tarea
    AutorizacionService.verificarPermiso(project, user);
    const tarea = new Tarea();
    tarea.fill({
      descripcion,
    });
    await project.tareas().save(tarea);
    return tarea;
  }

  async update({ auth, params, request }) {
    const user = await auth.getUser();
    const { id } = params;
    const tarea = await Tarea.find(id);
    const project = await tarea.project().fetch();
    AutorizacionService.verificarPermiso(project, user);
    tarea.merge(request.only(["descripcion", "completada"]));
    await tarea.save();
    return tarea;
  }

  async destroy({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const tarea = await Tarea.find(id);
    const project = await tarea.project().fetch();
    AutorizacionService.verificarPermiso(project, user);
    await tarea.delete();
    return tarea;
  }
}
module.exports = TareaController;
