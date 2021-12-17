const mapper = require("automapper-js");
const { RegistrationDto } = require("../dtos");

class RegistrationController {
  constructor({ RegistrationService }) {
    this._registrationService = RegistrationService;
  }

  async getRegistrations(req, res) {
    let registrations = await this._registrationService.getAll();
    registrations = registrations.map(registration => mapper(RegistrationDto, registration));
    return res.send({
      data: registrations
    });
  }

  async getRegistration(req, res) {
    const { id } = req.params;
    let registration = await this._registrationService.get(id);
    if (!registration) {
      return res.status(404).send();
    }
    registration = mapper(RegistrationDto, registration);
    return res.send({
      data: registration
    });
  }

  async createRegistration(req, res) {
    const { body } = req;
    const createdRegistration = await this._registrationService.create(body);
    const registration = mapper(RegistrationDto, createdRegistration);
    return res.status(201).send({
      data: registration
    });
  }

  async updateRegistration(req, res) {
    const { body } = req;
    const { id } = req.params;
    let registration = await this._registrationService.get(id);
    if (!registration) {
      return res.status(404).send();
    }
    await this._registrationService.update(id, body);
    return res.status(204).send();
  }

  async deleteRegistration(req, res) {
    const { id } = req.params;
    let registration = await this._registrationService.get(id);
    if (!registration) {
      return res.status(404).send();
    }
    await this._registrationService.delete(id);
    return res.status(204).send();
  }
}

module.exports = RegistrationController;

