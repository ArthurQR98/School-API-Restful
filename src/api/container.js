const { asClass, asValue, asFunction, createContainer } = require('awilix');
// app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');
// routes
const { Routes, StudentRoutes, TeacherRoutes, CourseRoutes, RegistrationRoutes, SectionRoutes, SubjectRoutes } = require('./routes/index.routes');
// business
const { StudentBusiness, TeacherBusiness, CourseBusiness, RegistrationBusiness, SectionBusiness, SubjectBusiness } = require("../domain");
// controllers
const { StudentController, TeacherController, CourseController, RegistrationController, SectionController, SubjectController } = require("../api/controllers");
// services
const { StudentService, TeacherService, CourseService, RegistrationService, SectionService, SubjectService } = require("../services");
// repositories
const { StudentRepository, TeacherRepository, CourseRepository, RegistrationRepository, SectionRepository, SubjectRepository } = require("../dal/repositories");
// db
const db = require('../dal/models');

const container = createContainer();

container.register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    StudentController: asClass(StudentController).singleton(),
    StudentRoutes: asFunction(StudentRoutes).singleton(),
    TeacherController: asClass(TeacherController).singleton(),
    TeacherRoutes: asFunction(TeacherRoutes).singleton(),
    CourseController: asClass(CourseController).singleton(),
    CourseRoutes: asFunction(CourseRoutes).singleton(),
    RegistrationController: asClass(RegistrationController).singleton(),
    RegistrationRoutes: asFunction(RegistrationRoutes).singleton(),
    SectionController: asClass(SectionController).singleton(),
    SectionRoutes: asFunction(SectionRoutes).singleton(),
    SubjectController: asClass(SubjectController).singleton(),
    SubjectRoutes: asFunction(SubjectRoutes).singleton(),
}).register({
    config: asValue(config)
}).register({
    db: asValue(db)
}).register({
    StudentService: asClass(StudentService).singleton(),
    TeacherService: asClass(TeacherService).singleton(),
    CourseService: asClass(CourseService).singleton(),
    RegistrationService: asClass(RegistrationService).singleton(),
    SectionService: asClass(SectionService).singleton(),
    SubjectService: asClass(SubjectService).singleton(),
}).register({
    StudentRepository: asClass(StudentRepository).singleton(),
    TeacherRepository: asClass(TeacherRepository).singleton(),
    CourseRepository: asClass(CourseRepository).singleton(),
    RegistrationRepository: asClass(RegistrationRepository).singleton(),
    SectionRepository: asClass(SectionRepository).singleton(),
    SubjectRepository: asClass(SubjectRepository).singleton(),
}).register({
    StudentBusiness: asClass(StudentBusiness).singleton(),
    TeacherBusiness: asClass(TeacherBusiness).singleton(),
    CourseBusiness: asClass(CourseBusiness).singleton(),
    RegistrationBusiness: asClass(RegistrationBusiness).singleton(),
    SectionBusiness: asClass(SectionBusiness).singleton(),
    SubjectBusiness: asClass(SubjectBusiness).singleton(),
})

module.exports = container;