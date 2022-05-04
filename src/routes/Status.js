import { useAtom } from 'jotai';
import { orderNumberAtom } from '../AtomHooks/orderNumberAtom';
import { statusInfoAtom } from '../AtomHooks/statusInfoAtom';
import { useEffect, useState } from 'react'

export default function Status() {

    const [StatusLineClass, setStatusLineClass] = useState('statusLineDelivered');

    const [orderNumber, setOrderNumber] = useAtom(orderNumberAtom);
    const [statusInfo, setStatusInfo] = useAtom(statusInfoAtom);

    function getStatusLineClass(statusInfo) {
        let lineClass = 'statusLineCreated'
        if (statusInfo.status.processing != '0000-00-00') lineClass = 'statusLineProcessing';
        if (statusInfo.status.transit != '0000-00-00') lineClass = 'statusLineTransit';
        if (statusInfo.status.delivered != '0000-00-00') lineClass = 'statusLineDelivered';
        return lineClass;
    }


    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({orderNumber: orderNumber})
        };
        fetch('/statusCheck', requestOptions)
            .then(response => response.json())
            .then(data => setStatusInfo(data));

    }, []);


    useEffect(() => {
        setStatusLineClass(getStatusLineClass(statusInfo));

    }, [statusInfo]);


    return(
        <div className="content">
            <h1 className="pageTitle">Статус отправления {orderNumber}</h1>
            <div className="statusBlock">
                <div className="blockCenter">
                    <div className="statusInfo">
                        <div className="statusTitleHolder">
                            <div className = {
                                (statusInfo.status.created == '0000-00-00') ? "statusTitlePassive" : "statusTitleActive"} >
                                    Создано
                            </div>
                        </div>
                        <div className="statusTitleHolder">
                            <div className = {
                                (statusInfo.status.processing == '0000-00-00') ? "statusTitlePassive" : "statusTitleActive"} >
                                    В обработке
                            </div>
                        </div>
                        <div className="statusTitleHolder">
                            <div className = {
                                (statusInfo.status.transit == '0000-00-00') ? "statusTitlePassive" : "statusTitleActive"} >
                                    В пути
                            </div>
                        </div>
                        <div className="statusTitleHolder">
                            <div className = {
                                (statusInfo.status.delivered == '0000-00-00') ? "statusTitlePassive" : "statusTitleActive"} >
                                    Доставлено
                            </div>
                        </div>
                    </div>
                    <div className={StatusLineClass}></div>
                    <div className="statusInfo">
                        <div className="statusDateHolder">
                            <div className="statusTitlePassive">
                                {(statusInfo.status.created == '0000-00-00') ? '' : statusInfo.status.created}
                            </div>
                        </div>
                        <div className="statusDateHolder">
                            <div className="statusTitlePassive">
                                {(statusInfo.status.processing == '0000-00-00') ? '' : statusInfo.status.processing}
                            </div>
                        </div>
                        <div className="statusDateHolder">
                            <div className="statusTitlePassive">
                                {(statusInfo.status.transit == '0000-00-00') ? '' : statusInfo.status.transit}
                            </div>
                        </div>
                        <div className="statusDateHolder">
                            <div className="statusTitlePassive">
                                {(statusInfo.status.delivered == '0000-00-00') ? '' : statusInfo.status.delivered}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="statusdates">
                </div>
            </div>
            <div className="predictionDate">
                Предполагаемая дата доставки: {statusInfo.deliveryDate}
            </div>
        </div>
    );
}