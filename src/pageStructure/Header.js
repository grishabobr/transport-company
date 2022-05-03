import { NavLink } from "react-router-dom";

export default function Header() {
    return(
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
    );
}