import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Services from "./Pages/Services/Services";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";


function App() {
  return (
    <>
      <Header >
        <Routes>
            {/* normal routes  */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* login & sign up  */}
            <Route path="/login" element={<Login />} />
            <Route path="/sing-up" element={<SignUp />} />

        </Routes>
      </Header>
      <Footer />
    </>
  );
}
export default App;
