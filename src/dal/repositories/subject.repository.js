const BaseRepository = require("./base.repository");

class SubjectRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Subject");
  }
}

module.exports = SubjectRepository;