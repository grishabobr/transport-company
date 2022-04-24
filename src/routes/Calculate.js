export default function Main() {
    return(
        <div className="content">
            <h1 className="pageTitle">Расчет стоимости отправления</h1>
            <div className="formString">
                <div className="stringTitle">
                    Откуда:
                </div>
                <div className="stringBack">
                    <img src="assets/fromIcon.svg" className="stringIcon"/>
                    <input type="text" className="stringInput" placeholder="Москва"/>
                </div>
            </div>
            <div className="formString">
                <div className="stringTitle">
                    Куда:
                </div>
                <div className="stringBack">
                    <img src="assets/toIcon.svg" className="stringIcon"/>
                    <input type="text" className="stringInput" placeholder="Санкт-Петербург"/>
                </div>
            </div>
            <div className="formString">
                <div className="stringTitle">
                    Размер посылки, см:
                </div>
                <div className="sizeStrings">
                    <div className="stringBack">
                        <img src="assets/sizeLengthIcon.svg" className="stringIcon"/>
                        <input type="text" className="stringInput" placeholder="длина"/>
                    </div>
                    <div className="sizeSeparator"></div>
                    <div className="stringBack">
                        <img src="assets/sizeWidthIcon.svg" className="stringIcon"/>
                        <input type="text" className="stringInput" placeholder="ширина"/>
                    </div>
                    <div className="sizeSeparator"></div>
                    <div className="stringBack">
                        <img src="assets/sizeHeightIcon.svg" className="stringIcon"/>
                        <input type="text" className="stringInput" placeholder="высота"/>
                    </div>
                </div>
            </div>
            <div className="formString">
                <div className="stringTitle">
                    Вес посылки, кг:
                </div>
                <div className="sizeStrings">
                    <div className="stringBack">
                        <img src="assets/weightIcon.svg" className="stringIcon"/>
                        <input type="text" className="stringInput" placeholder="20"/>
                    </div>
                    <div className="sizeSeparator"></div>
                    <div className="ifDelictate">
                        <input type="checkbox" className="checkbox" id="ifDelicateCheckbox"/>
                        <label for="ifDelicateCheckbox"></label>
                        <div className="checkboxTitle">
                            Хрупкая посылка
                        </div>
                    </div>
                    <div className="sizeSeparator"></div>
                </div>
            </div>
            <div className="blockCenter">
                <a href="price.html" className="blockButtonLink2">
                    <div className="blockButton">
                        Узнать стоимость
                    </div>
                </a>
            </div>
        </div>
    );
}