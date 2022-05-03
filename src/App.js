import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Main from "./routes/Main";
import Calculate from "./routes/Calculate";
import CheckStatus from "./routes/CheckStatus";
import Contacts from "./routes/Contacts";
import Status from "./routes/Status";
import Price from "./routes/Price";
import Order from "./routes/Order";
import Error404 from "./routes/error404";
import Header from "./pageStructure/Header";
import Footer from "./pageStructure/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/checkStatus" element={<CheckStatus />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/status" element={<Status />} />
        <Route path="/price" element={<Price />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
