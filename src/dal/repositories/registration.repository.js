const BaseRepository = require("./base.repository");

class RegistrationRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Registration");
  }
}

module.exports = RegistrationRepository;