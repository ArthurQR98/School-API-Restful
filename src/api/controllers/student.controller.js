const mapper = require("automapper-js");
const { StudentDto } = require("../dtos");
class StudentController {
  constructor({ StudentService }) {
    this._studentService = StudentService;
  }

  async getStudents(req, res) {
    let students = await this._studentService.getAll();
    students = students.map(student => mapper(StudentDto, student));
    return res.send({
      data: students
    });
  }

  async getStudent(req, res) {
    const { id } = req.params;
    let student = await this._studentService.get(id);
    if (!student) {
      return res.status(404).send();
    }
    student = mapper(StudentDto, student);
    return res.send({
      data: student
    });
  }

  async createStudent(req, res) {
    const { body } = req;
    const createdStudent = await this._studentService.create(body);
    if (createdStudent === true) {
      return res.status(400).send({ message: "User with that email already exist" })
    }
    const student = mapper(StudentDto, createdStudent);
    return res.status(201).send({
      data: student
    });
  }

  async updateStudent(req, res) {
    const { body } = req;
    const { id } = req.params;
    let student = await this._studentService.get(id);
    if (!student) {
      return res.status(404).send();
    }
    await this._studentService.update(id, body);
    return res.status(204).send();
  }

  async deleteStudent(req, res) {
    const { id } = req.params;
    let student = await this._studentService.get(id);
    if (!student) {
      return res.status(404).send();
    }
    await this._studentService.delete(id);
    return res.status(204).send();
  }
}

module.exports = StudentController;
