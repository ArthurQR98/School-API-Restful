const { Router } = require("express");

module.exports = function ({ SectionController }) {
    const router = Router();

    router.get("/", SectionController.getSections.bind(SectionController));
    router.get("/:id", SectionController.getSection.bind(SectionController));
    router.post("/", SectionController.createSection.bind(SectionController));
    router.put("/:id", SectionController.updateSection.bind(SectionController));
    router.delete("/:id", SectionController.deleteSection.bind(SectionController));

    return router;
};
