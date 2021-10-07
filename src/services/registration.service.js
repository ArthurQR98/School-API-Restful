const BaseService = require("./base.service");
class RegistrationService extends BaseService {
  constructor({ RegistrationBusiness }) {
    super(RegistrationBusiness);
  }
}

module.exports = RegistrationService;