import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { orderInfoAtom } from '../AtomHooks/orderInfoAtom';


export default function Calculate() {
    const navigate = useNavigate()

    const [orderInfo, setOrderInfo] = useAtom(orderInfoAtom);

    const fromRef = useRef();
    const toRef = useRef();
    const lengthRef = useRef();
    const widthRef = useRef();
    const heightRef = useRef();
    const weightRef = useRef();
    const delicateRef = useRef();

    function calculatePrice(event) {
        event.preventDefault();
        setOrderInfo({
            From: fromRef.current.value,
            To: toRef.current.value,
            Length: lengthRef.current.value,
            Width: widthRef.current.value,
            Height: heightRef.current.value,
            Weight: weightRef.current.value,
            Delicate: delicateRef.current.checked
        });
        navigate('/price');
    }

    return(
        <div className="content">
            <h1 className="pageTitle">Расчет стоимости отправления</h1>
            <form onSubmit={calculatePrice}>
            <div className="formString">
                <div className="stringTitle">
                    Откуда:
                </div>
                <div className="stringBack">
                    <img src="assets/fromIcon.svg" className="stringIcon"/>
                    <input type="text" className="stringInput" placeholder="Москва" ref={fromRef}/>
                </div>
            </div>
            <div className="formString">
                <div className="stringTitle">
                    Куда:
                </div>
                <div className="stringBack">
                    <img src="assets/toIcon.svg" className="stringIcon"/>
                    <input type="text" className="stringInput" placeholder="Санкт-Петербург" ref={toRef}/>
                </div>
            </div>
            <div className="formString">
                <div className="stringTitle">
                    Размер посылки, см:
                </div>
                <div className="sizeStrings">
                    <div className="stringBack">
                        <img src="assets/sizeLengthIcon.svg" className="stringIcon"/>
                        <input type="text" className="stringInput" placeholder="длина" ref={lengthRef}/>
                    </div>
                    <div className="sizeSeparator"></div>
                    <div className="stringBack">
                        <img src="assets/sizeWidthIcon.svg" className="stringIcon"/>
                        <input type="text" className="stringInput" placeholder="ширина" ref={widthRef}/>
                    </div>
                    <div className="sizeSeparator"></div>
                    <div className="stringBack">
                        <img src="assets/sizeHeightIcon.svg" className="stringIcon"/>
                        <input type="text" className="stringInput" placeholder="высота" ref={heightRef}/>
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
                        <input type="text" className="stringInput" placeholder="20" ref={weightRef}/>
                    </div>
                    <div className="sizeSeparator"></div>
                    <div className="ifDelictate">
                        <input type="checkbox" className="checkbox" id="ifDelicateCheckbox" ref={delicateRef}/>
                        <label htmlFor="ifDelicateCheckbox"></label>
                        <div className="checkboxTitle">
                            Хрупкая посылка
                        </div>
                    </div>
                    <div className="sizeSeparator"></div>
                </div>
            </div>
            <div className="blockCenter">
                <input type="submit" value="Узнать стоимость" className="blockButtonLink2 blockButton" />
            </div>
            </form>
        </div>
    );
}