const BaseRepository = require("./base.repository");

class SectionRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Section");
  }
}

module.exports = SectionRepository;