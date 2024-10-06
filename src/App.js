import "./App.css";
import Routers from "./Routers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//import "./styles/custom.scss";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <Routers />
    </div>
  );
}

export default App;
