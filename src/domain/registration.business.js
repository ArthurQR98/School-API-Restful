const BaseBusiness = require("./base.business");
const { Registration } = require("./models");

class RegistrationBusiness extends BaseBusiness {
  constructor({ RegistrationRepository }) {
    super(RegistrationRepository, Registration);
  }
}

module.exports = RegistrationBusiness;