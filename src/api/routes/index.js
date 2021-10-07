const { Router } = require("express");
const express = require('express');
const helmet = require('helmet');
require('express-async-errors');
const cors = require("cors");
const compression = require("compression");
const swaggerUI = require('swagger-ui-express');
const { SWAGGER_PATH } = require('../../config/environments');
const swaggerDocument = require(SWAGGER_PATH);

module.exports = function ({ StudentRoutes, TeacherRoutes, CourseRoutes, RegistrationRoutes, SectionRoutes, SubjectRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(express.json())
    .use(helmet())
    .use(compression());

  apiRoute.use("/student", StudentRoutes);
  apiRoute.use("/teacher", TeacherRoutes);
  apiRoute.use("/course", CourseRoutes);
  apiRoute.use("/registration", RegistrationRoutes);
  apiRoute.use("/section", SectionRoutes);
  apiRoute.use("/subject", SubjectRoutes);
  router.use("/v1/api", apiRoute);
  router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));


  return router;
};
