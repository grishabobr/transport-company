import { useAtom } from 'jotai';
import { orderInfoAtom } from '../AtomHooks/orderInfoAtom';
import { priceInfoAtom } from '../AtomHooks/priceInfoAtom';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'

export default function Price() {
    const [orderInfo, setOrderInfo] = useAtom(orderInfoAtom);

    const [priceInfo, setPriceInfo] = useAtom(priceInfoAtom);


    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        };
        fetch('/getPrice', requestOptions)
            .then(response => response.json())
            .then(data => setPriceInfo(data));

    }, []);

    return(
        <div className="content">
        <h1 className="pageTitle">Расчет стоимости отправления</h1>
        <div className="routeBlock">
            <div className="blockCenter">
                <img src="assets/routeline.svg" className="routeLine"/>
                <div className="distance">{priceInfo.distance} км</div>
                <div className="routeInfo">
                    <div className="statusDateHolder">
                        <div className="zipcode">{priceInfo.index.indexFrom}</div>
                    </div>
                    <div className="statusDateHolder">
                        <div className="zipcode">{priceInfo.index.indexTo}</div>
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
                <div className="parcelInfoItem">
                    Дата доставки: {priceInfo.deliveryDate}
                </div>
            </div>
        </div>
        <div className="blockCenter">
            <div className="priceLine">
                <div className="pricePrefix">Стоимость составит:</div>
                <div className="price">{priceInfo.price} ₽</div>
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