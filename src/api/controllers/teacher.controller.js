const mapper = require("automapper-js");
const { TeacherDto } = require("../dtos");
class TeacherController {
  constructor({ TeacherService }) {
    this._teacherService = TeacherService;
  }

  async getTeachers(req, res) {
    let teachers = await this._teacherService.getAll();
    teachers = teachers.map(teacher => mapper(TeacherDto, teacher));
    return res.send({
      data: teachers
    });
  }

  async getTeacher(req, res) {
    const { id } = req.params;
    let teacher = await this._teacherService.get(id);
    if (!teacher) {
      return res.status(404).send();
    }
    teacher = mapper(TeacherDto, teacher);
    return res.send({
      data: teacher
    });
  }

  async createTeacher(req, res) {
    const { body } = req;
    const createdTeacher = await this._teacherService.create(body);
    if (createdTeacher === true) {
      return res.status(400).send({ message: "User with that email already exist" })
    }
    const teacher = mapper(TeacherDto, createdTeacher);
    return res.status(201).send({
      data: teacher
    });
  }

  async updateTeacher(req, res) {
    const { body } = req;
    const { id } = req.params;
    let teacher = await this._teacherService.get(id);
    if (!teacher) {
      return res.status(404).send();
    }
    await this._teacherService.update(id, body);
    return res.status(204).send();
  }

  async deleteTeacher(req, res) {
    const { id } = req.params;
    let teacher = await this._teacherService.get(id);
    if (!teacher) {
      return res.status(404).send();
    }
    await this._teacherService.delete(id);
    return res.status(204).send();
  }
}

module.exports = TeacherController;
