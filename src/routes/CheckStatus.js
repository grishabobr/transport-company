import { useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { orderNumberAtom } from '../AtomHooks/orderNumberAtom';
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask';

export default function Main() {
    const navigate = useNavigate()
    const [orderNumber, setOrderNumber] = useAtom(orderNumberAtom);
    const [inputClassName, setInputClassName] = useState("stringBack");
    const orderNumberRef = useRef();

    function checkStatus(event) {
        event.preventDefault();
        if (orderNumberRef.current.value.length == 11){
            setOrderNumber(orderNumberRef.current.value);
            navigate('/status');
        }
        else {
            setInputClassName("stringBack inputError");
        }
    }

    return(
        <div className="content">
            <h1 className="pageTitle">Узнать статус отправления</h1>
            <form onSubmit={checkStatus}>
                <div className="formString">
                    <div className="stringTitle">
                        Введите номер отправления:
                    </div>
                    <div className={inputClassName}>
                        <img src="assets/numberIcon.svg" className="stringIcon"/>
                        <InputMask type = "text"
                        mask = "999-999-999"
                        maskChar = {null}
                        className = "stringInput"
                        placeholder = "XXX-XXX-XXX"
                        ref = {orderNumberRef}
                        />
                    </div>
                </div>
                <div className="blockCenter">
                    <input type="submit" value="Узнать статус" className="blockButtonLink2 blockButton" />
                </div>
            </form>
        </div>
    );
}