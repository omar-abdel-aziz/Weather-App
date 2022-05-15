import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WeatherApp from "./WeatherApp";
import Info from "./Info";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<WeatherApp />} />
          <Route
            exact
            path="/info"
            element={
              <Info
                temp={0}
                descriptopn={"none"}
                weather={"none"}
                icon={"none"}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
// useNavigate cant be used outside of router

export default App;
