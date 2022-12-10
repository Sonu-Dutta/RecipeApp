import Attraction from "./components/Attraction";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Logobar from "./components/Logobar";
import Catogory from "./components/Catogory";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logobar />
        <Search />
        {/* <Catogory /> */}
        {/* <Attraction /> */}

        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
