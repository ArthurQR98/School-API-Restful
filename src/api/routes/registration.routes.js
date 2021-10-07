const { Router } = require("express");

module.exports = function({ RegistrationController }) {
  const router = Router();

  router.get("/", RegistrationController.getRegistrations.bind(RegistrationController));
  router.get("/:id", RegistrationController.getRegistration.bind(RegistrationController));
  router.post("/", RegistrationController.createRegistration.bind(RegistrationController));
  router.put("/:id", RegistrationController.updateRegistration.bind(RegistrationController));
  router.delete("/:id", RegistrationController.deleteRegistration.bind(RegistrationController));

  return router;
};
