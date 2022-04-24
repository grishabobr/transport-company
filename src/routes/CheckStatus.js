export default function Main() {
    return(
        <div className="content">
            <h1 className="pageTitle">Узнать статус отправления</h1>
            <div className="formString">
                <div className="stringTitle">
                    Введите номер отправления:
                </div>
                <div className="stringBack">
                    <img src="assets/numberIcon.svg" className="stringIcon"/>
                    <input type="text" className="stringInput" placeholder="XXX-XXX-XXX"/>
                </div>
            </div>
            <div className="blockCenter">
                <a href="status.html" className="blockButtonLink2">
                    <div className="blockButton">
                        Узнать статус
                    </div>
                </a>
            </div>
        </div>
    );
}