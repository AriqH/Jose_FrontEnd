import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";

// import HomePage from './pages/HomePage';
import ServicesPage from "./pages/ServicesPage";
import DoctorPage from "./pages/DoctorPage";
// import TestimonialPage from "./pages/ReservasiPage";
// import FaqPage from "./pages/FaqPage";
import SymptomsPage from "./pages/SymptomsPage";
import FasilitasPage from "./pages/FasilitasPage";
import LoginPage from "./pages/LoginPage";
import DaftarPage from "./pages/DaftarPage";
import ReservasiPage from "./pages/ReservasiPage";
import { AuthProvider } from "./components/AuthContext";
import ReservationHistory from "./pages/ReservasiHistory";

function App() {
  return (
    <AuthProvider>
      <div>
        <NavbarComponents />

        <Routes>
          <Route path="/" Component={ServicesPage} />
          <Route path="/services" Component={ServicesPage} />
          <Route path="/symtomschecker" Component={SymptomsPage} />
          <Route path="/fasilitas" Component={FasilitasPage} />
          <Route path="/doctor" Component={DoctorPage} />
          <Route path="/reservasi" Component={ReservasiPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/daftar" Component={DaftarPage} />
          <Route path="/reservation-history" Component={ReservationHistory} />
        </Routes>

        <FooterComponents />
      </div>
    </AuthProvider>
  );
}

export default App;
