import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
        <a class="logo" href="index.html">
            <img src="assets/logo.svg" class="logoSvg"/>
            <div class="logoTitle">
                Транспортная компания
            </div>
        </a>
        <a class="menuItemCurrent" href="index.html">
            Главная
        </a>
        <a class="menuItem" href="calculate.html">
            Расчитать стоимость
        </a>
        <a class="menuItem" href="checkStatus.html">
            Статус отправления
        </a>
        <a class="menuItem" href="contacts.html">
            Контакты
        </a>
    </div>



    <div class="content">
        <div class="block">
            <div class="blockText">
                Оформляйте посылки онлайн по всей России
            </div>
            <a href="calculate.html" class="blockButtonLink">
                <div class="blockButton">
                    Отправить посылку
                </div>
            </a>
        </div>
    </div>


    
    <div class="footer">
        © Все права защищены, 2022
    </div>
    </div>
  );
}

export default App;
