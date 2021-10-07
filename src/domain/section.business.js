const BaseBusiness = require("./base.business");
const { Section } = require("./models");

class SectionBusiness extends BaseBusiness {
    constructor({ SectionRepository }) {
        super(SectionRepository, Section);
    }
}

module.exports = SectionBusiness;