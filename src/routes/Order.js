import { useAtom } from 'jotai';
import { orderInfoAtom } from '../AtomHooks/orderInfoAtom';
import { priceInfoAtom } from '../AtomHooks/priceInfoAtom';
import { orderNumberAtom } from '../AtomHooks/orderNumberAtom';
import { useEffect, useState } from 'react'

export default function Order() {

    const [orderInfo, setOrderInfo] = useAtom(orderInfoAtom);
    const [priceInfo, setPriceInfo] = useAtom(priceInfoAtom);
    const [orderNumber, setOrderNumber] = useAtom(orderNumberAtom);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                addressFrom: {
                    address: orderInfo.From,
                    index: priceInfo.index.indexFrom
                },
                addressTo: {
                    address: orderInfo.To,
                    index: priceInfo.index.indexTo
                },
                parameters: {
                    length: orderInfo.Length,
                    width: orderInfo.Width,
                    height: orderInfo.Height,
                    weight: orderInfo.Weight,
                    delicate: orderInfo.Delicate
                },
                distance: priceInfo.distance,
                price: priceInfo.price,
                deliveryDate: priceInfo.deliveryDate
            })
        };
        fetch('/createOrder', requestOptions)
            .then(response => response.json())
            .then(data => setOrderNumber(data.orderNumber));

    }, []);

    return(
        <div className="content">
        <h1 className="pageTitle">Заказ оформлен</h1>
        <div className="orderNumberBlock">
            <div className="orderNumberPrefix">
                Номер вашего заказа:
            </div>
            <div className="orderNumberLine">
                <img src="assets/numberIcon.svg" className="orderNumberIcon"/>
                <div className="orderNumber">
                    {orderNumber}
                </div>
            </div>
        </div>
    </div>
    );
}