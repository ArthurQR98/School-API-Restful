const BaseService = require("./base.service");
class SubjectService extends BaseService {
  constructor({ SubjectBusiness }) {
    super(SubjectBusiness);
  }
}

module.exports = SubjectService;