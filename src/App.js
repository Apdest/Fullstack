import "./App.css";
import Footer from "./componets/Footer/Footer";
import Navbar from "./componets/Navbar/Navbar.jsx";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
