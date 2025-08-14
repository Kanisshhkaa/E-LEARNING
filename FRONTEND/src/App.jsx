import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Master from './Layout/Master'
import Home from './User/Home'
import About from './User/About'
import Blog from './User/Blog'
import Contact from './User/Contact'
import Premium_Courses from './User/Premium_Courses'
import Blog1 from './User/Blog1'
import Blog2 from './User/Blog2'
import Blog3 from './User/Blog3'
import Blog4 from './User/Blog4'
import AdminMaster from './Layout/AdminMaster'
import Dashboard from './Admin/Dashboard'
import Login from './Authentication/Login'
import AddCategories from './Admin/AddCategories'
import { ToastContainer } from 'react-toastify'
import TrainerMaster from './Layout/TrainerMaster'
import TrainerDashboard from './Trainer/TrainerDashboard'
import ManageCategories from './Admin/ManageCategories'
import UserRegister from './Authentication/UserRegister'
import AddCourses from './Admin/AddCourses'
import ManageCourses from './Admin/ManageCourses'
import ManageQueries from './Admin/ManageQueries'
import UpdateCategories from './Admin/UpdateCategories'
import UpdateCourses from './Admin/UpdateCourses'
import Categories from './User/Categories'
import AddTrainer from './Admin/AddTrainer'
import ManageTrainer from './Admin/ManageTrainer'
import AddAlotCourses from './Admin/AddAlotCourses'
import ManageAlotCourses from './Admin/ManageAlotCourses'
import AddBookings from './Admin/AddBookings'
import ManageBookings from './Admin/ManageBookings'
import AddCertificate from './Admin/AddCertificate'
import AddAlotStudents from './Admin/AddAlotStudents'
import ManageAlotStudents from './Admin/ManageAlotStudents'
import ManageCertificate from './Admin/ManageCertificate'
import UpdateAlotCourses from './Admin/UpdateAlotCourses'
import UpdateAlotStudents from './Admin/UpdateAlotStudents'
import UpdateCertificate from './Admin/UpdateCertificate'
import ViewAlotedCourses from './Trainer/ViewAlotedCourses'
import ViewAlotedStudents from './Trainer/ViewAlotedStudents'
import ViewCourses from './User/ViewCourses'
import AddSyllabus from './Trainer/AddSyllabus'
import ManageSyllabus from './Trainer/ManageSyllabus'
import UpdateSyllabus from './Trainer/UpdateSyllabus'
import ViewCertificate from './User/ViewCertificate'
import Profile from './Trainer/Profile'
import UpdateProfile from './Trainer/UpdateProfile'
import MyBooking from './User/MyBooking'
import Success from './User/Success'
import ViewSyllabus from './User/ViewSyllabus'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
  
        <Route path='/Categories' element={<Categories/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Premium_Courses' element={<Premium_Courses/>} />
        <Route path='/Success' element={<Success/>} />
        <Route path='/ViewCourses/:id' element={<ViewCourses/>} />
        <Route path='/Blog1' element={<Blog1/>} />
        <Route path='/Blog2' element={<Blog2/>} />
        <Route path='/Blog3' element={<Blog3/>} />
        <Route path='/Blog4' element={<Blog4/>} />
        <Route path='/Viewcertificate' element={<ViewCertificate/>} />
        <Route path='/MyBookings' element={<MyBooking/>} />
        <Route path='/viewSyllabus/:id' element={<ViewSyllabus/>} />
        <Route path='/UserRegister' element={<UserRegister/>} />
        <Route path='/Login' element={<Login/>}/>
        </Route>




        <Route path='/admin' element={<AdminMaster/>}>
        <Route path='/admin' element={<Dashboard/>}/>
        <Route path='/admin/AddCategories' element={<AddCategories/>}/>
        <Route path='/admin/ManageCategories' element={<ManageCategories/>}/>
        <Route path='/admin/AddCourses' element={<AddCourses/>} />
        <Route path='/admin/ManageCourses' element={<ManageCourses/>} />
        <Route path='/admin/updatecategory/:id' element={<UpdateCategories/>} />
        <Route path='/admin/UpdateCourses/:id' element={<UpdateCourses/>} />
        <Route path='/admin/AddTrainer' element={<AddTrainer/>} />
        <Route path='/admin/ManageTrainer' element={<ManageTrainer/>} />
        <Route path='/admin/AddAlotCourses' element={<AddAlotCourses/>} />
        <Route path='/admin/AddAlotStudents' element={<AddAlotStudents/>} />
        <Route path='/admin/ManageAlotCourses' element={<ManageAlotCourses/>} />
        <Route path='/admin/updatealotcourses/:id' element={<UpdateAlotCourses/>} />
        <Route path='/admin/manageAlotStudents' element={<ManageAlotStudents/>} />
        <Route path='/admin/UpdateAlotStudents/:id' element={<UpdateAlotStudents/>} />
        <Route path='/admin/UpdateCertificate/:id' element={<UpdateCertificate/>} />
        <Route path='/admin/ManageCertificate' element={<ManageCertificate/>} />
        <Route path='/admin/AddBookings' element={<AddBookings/>} />
        <Route path='/admin/AddCertificate' element={<AddCertificate/>} />
        <Route path='/admin/ManageBookings' element={<ManageBookings/>} />
      
        <Route path='/admin/ManageQueries' element={<ManageQueries/>} />
        </Route>

        <Route path='/trainer' element={<TrainerMaster/>} >
        <Route path='/trainer' element={<TrainerDashboard/>} />
        <Route path='/trainer/viewalotcourses' element={<ViewAlotedCourses/>} />
        <Route path='/trainer/viewalotstudents' element={<ViewAlotedStudents/>} />
        <Route path='/trainer/AddSyllabus' element={<AddSyllabus/>} /> 
        <Route path='/trainer/ManageSyllabus' element={<ManageSyllabus/>} /> 
        <Route path='/trainer/UpdateSyllabus/:id' element={<UpdateSyllabus/>} /> 
        <Route path='/trainer/Profile' element={<Profile/>} /> 
        <Route path='/trainer/updateprofile/:id' element={<UpdateProfile/>} /> 
        
        </Route>

      </Routes>
      </BrowserRouter>
      <ToastContainer position='top-center' />
    </>
  )
}

export default App
