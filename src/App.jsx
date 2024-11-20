import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Authentication/AuthProvider/AuthProvider";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import '@smastrom/react-rating/style.css'
import CollegeDetails from "./Pages/HomePage/HomeComponent/CollegeDetails";
import CollegePage from "./Pages/CollegePage/CollegePage";
import SingleCollege from "./Pages/CollegePage/SingleCollege";
import AdmissionPage from "./Pages/AdmissionPage/AdmissionPage";
import NotFound from "./Pages/NotFound/NotFound";
import AdmissionFrom from "./Pages/AdmissionPage/AdmissionPageComponent/AdmissionFrom";
import Register from "./Authentication/Register/Register";
import Login from "./Authentication/Login/Login";
import PrivateRoute from "./Authentication/PrivateRoute/PrivateRoute";
import MyCollege from "./Pages/MyCollegePage/MyCollege";

function App() {

  return (
    <>
     <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            {/* homepage */}
            <Route path="/" element={ <Homepage></Homepage>}  ></Route>
            {/* homedata college details: private route */}
            <Route path="collegeinfo/:id" element={ 
              <PrivateRoute>
                <CollegeDetails></CollegeDetails>
              </PrivateRoute> } ></Route>
            {/* college page */}
            <Route path="/college" element={ <CollegePage></CollegePage> } ></Route>
            {/* single college data: private route */}
            <Route path="singlecollege/:id"  element={ 
              <PrivateRoute>
                <SingleCollege></SingleCollege>
              </PrivateRoute> } ></Route>
            {/* admission */}
            <Route path="/admission" element={ <AdmissionPage></AdmissionPage> } ></Route>
            {/* admission form: private route */}
            <Route path="admissionform/:id" element={ 
              <PrivateRoute>
                <AdmissionFrom></AdmissionFrom>
              </PrivateRoute> } ></Route>
            {/* my college */}
            <Route path="/mycollege" element={ 
              <PrivateRoute>
                <MyCollege></MyCollege>
              </PrivateRoute> } ></Route>
            {/* register */}
            <Route path='/register' element={ <Register></Register> } ></Route>
            {/* login */}
            <Route path='/login' element={ <Login></Login> } ></Route>
            
            {/* not found */}
            <Route path='*' element={ <NotFound></NotFound> } ></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
     </AuthProvider>
    </>
  )
}

export default App;