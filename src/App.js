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

function App() {
  return (
    <div className="App">
      <div className="header">
        <a className="logo" href="/">
          <img src="assets/logo.svg" className="logoSvg"/>
          <div className="logoTitle">
            Транспортная компания
          </div>
        </a>
        <NavLink to="/" className={({isActive}) => isActive ? 'menuItemCurrent' : 'menuItem'}>
          Главная
        </NavLink>
        <NavLink to="/calculate"
        className={({isActive}) => (isActive || window.location.pathname == '/order' || window.location.pathname == '/price') ? 'menuItemCurrent' : 'menuItem'}>
          Расчитать стоимость
        </NavLink>
        <NavLink to="/checkStatus"
        className={({isActive}) => (isActive || window.location.pathname == '/status') ? 'menuItemCurrent' : 'menuItem'}>
          Статус отправления
        </NavLink>
        <NavLink to="/contacts" className={({isActive}) => isActive ? 'menuItemCurrent' : 'menuItem'}>
          Контакты
        </NavLink>
      </div>

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

      <div className="footer">
        © Все права защищены, 2022
      </div>
    </div>
  );
}

export default App;
