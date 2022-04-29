import { useAtom } from 'jotai';
import { orderInfoAtom } from '../AtomHooks/orderInfoAtom';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'

export default function Price() {
    const [orderInfo, setOrderInfo] = useAtom(orderInfoAtom);

    const [pr, setPr] = useState(
        {
            index: {
                indexFrom: "000000",
                indexTo: "000000"
            },
            distance: 0,
            price: 0
        }
    );


    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        //console.log('trying')
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        };
        fetch('/tryp', requestOptions)
            .then(response => response.json())
            .then(data => setPr(data));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return(
        <div className="content">
        <h1 className="pageTitle">Расчет стоимости отправления</h1>
        <div className="routeBlock">
            <div className="blockCenter">
                <img src="assets/routeline.svg" className="routeLine"/>
                <div className="distance">{pr.distance} км</div>
                <div className="routeInfo">
                    <div className="statusDateHolder">
                        <div className="zipcode">{pr.index.indexFrom}</div>
                    </div>
                    <div className="statusDateHolder">
                        <div className="zipcode">{pr.index.indexTo}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="parcelInfo">
            Информация об отправлении:
            <div className="parcelInfoList">
                <div className="parcelInfoItem">
                    Откуда: {orderInfo.From}
                </div>
                <div className="parcelInfoItem">
                    Куда: {orderInfo.To}
                </div>
                <div className="parcelInfoItem">
                    Размер, см: {orderInfo.Length} x {orderInfo.Width} x {orderInfo.Height}
                </div>
                <div className="parcelInfoItem">
                    Вес, кг: {orderInfo.Weight}
                </div>
                <div className="parcelInfoItem">
                    Хрупкая посылка: {orderInfo.Delicate ? 'да' : 'нет'}
                </div>
            </div>
        </div>
        <div className="blockCenter">
            <div className="priceLine">
                <div className="pricePrefix">Стоимость составит:</div>
                <div className="price">{pr.price} ₽</div>
            </div>
            <Link to="/order" className="blockButtonLink2">
                <div className="blockButton">
                    Оформить заказ
                </div>
            </Link>
        </div>
    </div>
    );
}