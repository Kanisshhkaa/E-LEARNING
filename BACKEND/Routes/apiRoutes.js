const Router = require("express").Router();
const categoryController = require("../Server/Category/CategoryController")
const courseController = require("../Server/courses/courseController")
const queryController = require("../Server/query/queryController");
const syllabusController = require("../Server/syllabus/syllabusController");
const certificateController = require("../Server/certificates/certificateController")
const alotcourseController = require("../Server/alotCourses/alotCoursesController")
const alotstudentsController = require("../Server/alotStudents/alotStudentsController")
const bookingController = require("../Server/booking/bookingController")

const customerController = require("../Server/customer/customerController")
const trainerController = require("../Server/trainer/trainerController")
const userController = require("../Server/user/userController")


const multer = require("multer");


const CatgeoryStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Public/Categories')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const categoryUpload = multer({ storage: CatgeoryStorage })


  
const CourseStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Public/Course')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const courseUpload = multer({ storage: CourseStorage })



  
const CertificateStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Public/Certificates')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const certificateUpload = multer({ storage: CertificateStorage })


const ProfileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Public/trainerprofile')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const ProfileUpload = multer({ storage: ProfileStorage })


Router.post("/category/add",categoryUpload.single('categoryImage') ,categoryController.add);
Router.post("/category/getall",categoryController.getall);
Router.post("/category/getSingleData",categoryController.getSingleData);
Router.post("/category/deleteData",categoryController.deleteData);
Router.post("/category/updateData",categoryUpload.single('categoryImage'),categoryController.updateData);


Router.post("/course/add",courseUpload.single('image') ,courseController.add);
Router.post("/course/getall",courseController.getall);
Router.post("/course/getSingleData",courseController.getSingleData);
Router.post("/course/deleteData",courseController.deleteData);
Router.post("/course/updateData",courseUpload.single('image') ,courseController.updateData);


Router.post("/query/add",queryController.add);
Router.post("/query/getall",queryController.getall);
Router.post("/query/getSingleData",queryController.getSingleData);
Router.post("/query/deleteData",queryController.deleteData);
Router.post("/query/updateData",queryController.updateData);


Router.post("/syllabus/add",syllabusController.add);
Router.post("/syllabus/getall",syllabusController.getall);
Router.post("/syllabus/getSingleData",syllabusController.getSingleData);
Router.post("/syllabus/deleteData",syllabusController.deleteData);
Router.post("/syllabus/updateData",syllabusController.updateData);


Router.post("/certificate/add",certificateUpload.single('certificateImg'),certificateController.add);
Router.post("/certificate/getall",certificateController.getall);
Router.post("/certificate/getSingleData",certificateController.getSingleData);
Router.post("/certificate/deleteData",certificateController.deleteData);
Router.post("/certificate/updateData",certificateUpload.single('certificateImg'),certificateController.updateData);


Router.post("/alotcourses/add",alotcourseController.add)
Router.post("/alotcourses/getall",alotcourseController.getall)
Router.post("/alotcourses/getSingleData",alotcourseController.getSingleData)
Router.post("/alotcourses/deleteData",alotcourseController.deleteData)
Router.post("/alotcourses/updateData",alotcourseController.updateData)

Router.post("/alotstudents/add",alotstudentsController.add)
Router.post("/alotstudents/getall",alotstudentsController.getall)
Router.post("/alotstudents/getSingleData",alotstudentsController.getSingleData)
Router.post("/alotstudents/deleteData",alotstudentsController.deleteData)
Router.post("/alotstudents/updateData",alotstudentsController.updateData)

Router.post("/booking/add",bookingController.add)
Router.post("/booking/getall",bookingController.getall)
Router.post("/booking/getSingle",bookingController.getSingleData)
Router.post("/booking/delete",bookingController.deleteData)
Router.post("/booking/update",bookingController.updateData)

Router.post("/customer/register",customerController.register)
Router.post("/customer/login",userController.login)
Router.post("/customer/getall",customerController.getall)
Router.post("/customer/getSingle",customerController.getSingleData)
Router.post("/customer/update",customerController.updateData)

Router.post("/trainer/register",ProfileUpload.single('profile'),trainerController.register)
Router.post("/trainer/getall",trainerController.getall)
Router.post("/trainer/getSingle",trainerController.getSingleData)
Router.post("/trainer/update",ProfileUpload.single('profile'),trainerController.updateData)
Router.post("/trainer/login",userController.login)


Router.post("/admin/login",userController.login)

Router.post("/user/login",userController.login)
Router.post("/user/update",userController.updateData)

Router.use(require("../config/middleware"))

module.exports = Router;