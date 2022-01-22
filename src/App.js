import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Driver from "./pages/Driver-info";
import Map from "./pages/Map";
import Trip from "./pages/Trip-info";
import Vehicle from "./pages/Vehicle-info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/driver" element={<Driver />} />
        <Route path="/map" element={<Map />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/vehicle" element={<Vehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
