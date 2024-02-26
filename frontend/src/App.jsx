// react
import { Routes, Route, useLocation } from "react-router-dom";

// styling
import "./App.css";

// components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// framer-motion
import { AnimatePresence } from "framer-motion";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Faqs from "./pages/Faqs";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/support" element={<Support />} />
          <Route path="/dashboard/services" element={<Services />} />
          <Route path="/dashboard/book" element={<Booking />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

