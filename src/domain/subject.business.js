const BaseBusiness = require("./base.business");
const { Subject } = require("./models");

class SubjectBusiness extends BaseBusiness {
    constructor({ SubjectRepository }) {
        super(SubjectRepository, Subject);
    }
}

module.exports = SubjectBusiness;