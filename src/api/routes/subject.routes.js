const { Router } = require("express");

module.exports = function ({ SubjectController }) {
    const router = Router();

    router.get("/", SubjectController.getSubjects.bind(SubjectController));
    router.get("/:id", SubjectController.getSubject.bind(SubjectController));
    router.post("/", SubjectController.createSubject.bind(SubjectController));
    router.put("/:id", SubjectController.updateSubject.bind(SubjectController));
    router.delete("/:id", SubjectController.deleteSubject.bind(SubjectController));

    return router;
};
