import axios from "axios";
import qs from "qs"; 
const BASE_URL = "http://localhost:3040/api/";
export const BASE_IMAGE_URL = "http://localhost:3040/";

class ApiServices {
    addCategories(data) {
        return axios.post(BASE_URL + "category/add", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    getCategoryData(data){
        return axios.post(BASE_URL+"category/getall",qs.stringify(data))
    }

    addCourse(data) {
        return axios.post(BASE_URL + "course/add", data, {
            headers: {
                "Content-Type": "multipart/form-data",  
            },
        });
    }

    getCourseData(data){
        return axios.post(BASE_URL+"course/getall",qs.stringify(data))
       }

       addQueries(data) {
        return axios.post(BASE_URL + "query/add", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",  // Use x-www-form-urlencoded
            },
        });
    }

    getQueriesData(data){
        return axios.post(BASE_URL+"query/getall",qs.stringify(data))
       }    

    UserRegister(data) {
        return axios.post(BASE_URL + "customer/register", data);
    }
    getUserRegister(data){
        return axios.post(BASE_URL+"customer/getall",qs.stringify(data))
       }    

    deleteCategoryData(data){
        return axios.post(BASE_URL+"category/deleteData",qs.stringify(data));
    }

    deleteCourseData(data){
        return axios.post(BASE_URL + "course/deleteData",qs.stringify(data))
    }

    getSingleData(data){
        return axios.post(BASE_URL+ "category/getSingleData", qs.stringify(data))
    }

     updateCategories(data) {
        return axios.post(BASE_URL + "category/updateData", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }


    getSingleCourseData(data){
        return axios.post(BASE_URL+ "course/getSingleData", qs.stringify(data))
    }

     updateCourses(data) {
        return axios.post(BASE_URL + "course/updateData", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    }

    addTrainer(data) {
        return axios.post(BASE_URL + "trainer/register", data);
    }

    getTrainerData(data){
        return axios.post(BASE_URL+"trainer/getall",qs.stringify(data))
    }

    getSingleTrainerData(data){
        return axios.post(BASE_URL+"trainer/getSingle",qs.stringify(data))
    }

    addAlotCourses(data) {
        return axios.post(BASE_URL + "alotcourses/add", data);
    }

    addAlotStudents(data) {
        return axios.post(BASE_URL + "alotstudents/add", data);
    }

    getAlotCourses(data){
        return axios.post(BASE_URL+"alotcourses/getall",qs.stringify(data))
    }

    getSingleAlotCourses(data){
        return axios.post(BASE_URL+"alotcourses/getSingleData",qs.stringify(data))
    }

    deleteAlotCourses(data){
        return axios.post(BASE_URL+"alotcourses/deleteData",qs.stringify(data));
    }

    updateAlotCourses(data) {
        return axios.post(BASE_URL + "alotcourses/updateData", data)
    }


    getCertificate(data){
        return axios.post(BASE_URL+"certificate/getall",qs.stringify(data))
    }

    getAlotStudents(data){
        return axios.post(BASE_URL+"alotstudents/getall",qs.stringify(data))
    }
    getSingleAlotStudents(data){
        return axios.post(BASE_URL+"alotstudents/getSingleData",qs.stringify(data))
    }
    deleteAlotStudents(data){
        return axios.post(BASE_URL+"alotstudents/deleteData",qs.stringify(data));
    }
    updateAlotStudents(data) {
        return axios.post(BASE_URL + "alotstudents/updateData", data)
    }

    addBookings(data) {
        return axios.post(BASE_URL + "booking/add", data);
    }
    getBookings(data){
        return axios.post(BASE_URL+"booking/getall",qs.stringify(data))
    }

    addCertificate(data) {
        return axios.post(BASE_URL + "certificate/add", data,{
            headers: {
                "Content-Type": "multipart/form-data",  
            },
        });
    }
    deleteCertificates(data){
        return axios.post(BASE_URL+"certificate/deleteData",qs.stringify(data));
    }
    getSingleCertificates(data){
        return axios.post(BASE_URL+"certificate/getSingleData",qs.stringify(data));
    }
    updateCertificates(data){
        return axios.post(BASE_URL+"certificate/updateData",data,{
            headers: {
                "Content-Type": "multipart/form-data",  
            },
        }); 
    }

    addSyllabus(data) {
        return axios.post(BASE_URL + "syllabus/add", data);
    }

    getSyllabus(data){
        return axios.post(BASE_URL+"syllabus/getall",qs.stringify(data))
    }

    getSingleSyllabus(data){
        return axios.post(BASE_URL+"syllabus/getSingleData",qs.stringify(data));
    }

    deleteSyllabus(data){
        return axios.post(BASE_URL+"syllabus/deleteData",qs.stringify(data))
    }
    updateSyllabus(data){
        return axios.post(BASE_URL+"syllabus/updateData",qs.stringify(data));
    }
    updateTrainerStatus(data){
        return axios.post(BASE_URL+"trainer/update",data);
    }
    updateTrainerProfile(data){
        return axios.post(BASE_URL+"trainer/update",data,{
            headers: {
                "Content-Type": "multipart/form-data",  
            },
        });
    }
    updateBookingStatus(data){
        return axios.post(BASE_URL+"booking/update",qs.stringify(data));
    }
    updateUserStatus(data){
        return axios.post(BASE_URL+"user/update",qs.stringify(data));
    }

}



export default new ApiServices();
