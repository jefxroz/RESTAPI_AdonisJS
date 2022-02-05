"use strict";

const Project = use("App/Models/Project");
const AutorizacionService = use("App/Services/AutorizacionService");

class ProjectController {
  //cada proyecto pertence a un USR, valida que USR este auth
  async index({ auth }) {
    const user = await auth.getUser();
    return await user.projects().fetch();
  }

  async create({ auth, request }) {
    const user = await auth.getUser(); //toma USR
    const { nombre } = request.all(); //toma el nombre de todo lo que se esta enviando al SRV
    const project = new Project();
    //llenar el pro con los datos que nos estan dando
    project.fill({
      nombre,
    });
    await user.projects().save(project);
    return project;
  }


  async update({ auth, params, request }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    AutorizacionService.verificarPermiso(project, user);
    project.merge(request.only("nombre"));
    await project.save();
    return project;
  }

  async destroy({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;///Deconstruyendo
    const project = await Project.find(id);
    AutorizacionService.verificarPermiso(project, user);//Abastrae servicio, valida que sea el USR creador
    await project.delete();
    return project;
  }
}
module.exports = ProjectController;
