const mapper = require("automapper-js");
const { SectionDto } = require("../dtos");

class SectionController {
    constructor({ SectionService }) {
        this._sectionService = SectionService;
    }

    async getSections(req, res) {
        let sections = await this._sectionService.getAll();
        sections = sections.map(section => mapper(SectionDto, section));
        return res.send({
            payload: sections
        });
    }

    async getSection(req, res) {
        const { id } = req.params;
        let section = await this._sectionService.get(id);
        if (!section) {
            return res.status(404).send();
        }
        section = mapper(SectionDto, section);
        return res.send({
            payload: section
        });
    }

    async createSection(req, res) {
        const { body } = req;
        const createdSection = await this._sectionService.create(body);
        const section = mapper(SectionDto, createdSection);
        return res.status(201).send({
            payload: section
        });
    }

    async updateSection(req, res) {
        const { body } = req;
        const { id } = req.params;
        let section = await this._sectionService.get(id);
        if (!section) {
            return res.status(404).send();
        }
        await this._sectionService.update(id, body);
        return res.status(204).send();
    }

    async deleteSection(req, res) {
        const { id } = req.params;
        let section = await this._sectionService.get(id);
        if (!section) {
            return res.status(404).send();
        }
        await this._sectionService.delete(id);
        return res.status(204).send();
    }
}

module.exports = SectionController;
