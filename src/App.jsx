import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Authentication/AuthProvider/AuthProvider";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";

function App() {

  return (
    <>
     <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            {/* homepage */}
            <Route path="/" element={ <Homepage></Homepage>}  ></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
     </AuthProvider>
    </>
  )
}

export default App;