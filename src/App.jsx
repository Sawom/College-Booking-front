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

function App() {

  return (
    <>
     <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            {/* homepage */}
            <Route path="/" element={ <Homepage></Homepage>}  ></Route>
            {/* homedata college details*/}
            <Route path="collegeinfo/:id" element={ <CollegeDetails></CollegeDetails> } ></Route>
            {/* college page */}
            <Route path="/college" element={ <CollegePage></CollegePage> } ></Route>
            {/* single college data */}
            <Route path="singlecollege/:id"  element={ <SingleCollege></SingleCollege> } ></Route>
            {/* admission */}
            <Route path="/admission" element={ <AdmissionPage></AdmissionPage> } ></Route>
            {/* admission form */}
            <Route path="admissionform/:id" element={ <AdmissionFrom></AdmissionFrom> } ></Route>
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