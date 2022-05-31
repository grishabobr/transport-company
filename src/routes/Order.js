import { useAtom } from 'jotai';
import { orderInfoAtom } from '../AtomHooks/orderInfoAtom';
import { priceInfoAtom } from '../AtomHooks/priceInfoAtom';
import { orderNumberAtom } from '../AtomHooks/orderNumberAtom';
import { useEffect, useState } from 'react'

export default function Order() {

    const [isLoading, setIsLoading] = useState(true);

    const [orderInfo, setOrderInfo] = useAtom(orderInfoAtom);
    const [priceInfo, setPriceInfo] = useAtom(priceInfoAtom);
    const [orderNumber, setOrderNumber] = useAtom(orderNumberAtom);

    function formatNumber(num){
        let res = '';
        for (let i=0; i<num.length; i++){
            res+=num[i]
            if ((i + 1) % 3 == 0 && i != num.length - 1) res += '-';
        }
        return res;
    }

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
            .then(data => {
                setOrderNumber(formatNumber(data.orderNumber + ''));
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            });

    }, []);

    return(
        <div className="content">
            <h1 className="pageTitle">Заказ оформлен</h1>
            <div className="content">
                <div className="orderNumberBlock">
                    <div className="orderNumberPrefix">
                        Номер вашего заказа:
                    </div>
                    <div className="orderNumberLine">
                        <img src="assets/numberIcon.svg" className="orderNumberIcon"/>
                        {isLoading
                            ?<div className='orderNumberPlaceholder'></div>
                            :<div className="orderNumber">
                                {orderNumber}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}