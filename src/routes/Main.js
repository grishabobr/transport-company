import { Link } from "react-router-dom";

export default function Main() {
    return(
        <div className="content">
            <div className="block" >
                < div className="blockText" >
                    Оформляйте посылки онлайн по всей России
                </div>
                <Link to="/calculate" className="blockButtonLink">
                    <div className="blockButton">
                        Отправить посылку
                    </div>
                </Link>
            </div>
        </div>
    );
}