const mapper = require("automapper-js");
const { SubjectDto } = require("../dtos");

class SubjectController {
    constructor({ SubjectService }) {
        this._subjectService = SubjectService;
    }

    async getSubjects(req, res) {
        let subjects = await this._subjectService.getAll();
        subjects = subjects.map(subject => mapper(SubjectDto, subject));
        return res.send({
            payload: subjects
        });
    }

    async getSubject(req, res) {
        const { id } = req.params;
        const subject = await this._subjectService.get(id);
        if (!subject) {
            return res.status(404).send();
        }
        subject = mapper(SubjectDto, subject);
        return res.send({
            payload: subject
        });
    }

    async createSubject(req, res) {
        const { body } = req;
        const createdSubject = await this._subjectService.create(body);
        const subject = mapper(SubjectDto, createdSubject);
        return res.status(201).send({
            payload: subject
        });
    }

    async updateSubject(req, res) {
        const { body } = req;
        const { id } = req.params;
        const subject = await this._subjectService.get(id);
        if (!subject) {
            return res.status(404).send();
        }
        await this._subjectService.update(id, body);
        return res.status(204).send();
    }

    async deleteSubject(req, res) {
        const { id } = req.params;
        const subject = await this._subjectService.get(id);
        if (!subject) {
            return res.status(404).send();
        }
        await this._subjectService.delete(id);
        return res.status(204).send();
    }
}

module.exports = SubjectController;
