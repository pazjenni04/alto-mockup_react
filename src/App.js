import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Driver from "./pages/Driver/index";
import Map from "./pages/Map/index";
import Trip from "./pages/Trip/index.js.js";
import Vehicle from "./pages/Vehicle/index";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* routes to driver info page */}
        <Route path="/driver" element={<Driver />} />
        {/* routes to map info page */}
        <Route path="/map" element={<Map />} />
        {/* routes to trip info page */}
        <Route path="/trip" element={<Trip />} />
        {/* routes to vehicle info page */}
        <Route path="/vehicle" element={<Vehicle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
