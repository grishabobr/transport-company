import { useAtom } from 'jotai';
import { orderNumberAtom } from '../AtomHooks/orderNumberAtom';

export default function Status() {

    const [orderNumber, setOrderNumber] = useAtom(orderNumberAtom);

    return(
        <div className="content">
            <h1 className="pageTitle">Статус отправления {orderNumber}</h1>
            <div className="statusBlock">
                <div className="blockCenter">
                    <div className="statusInfo">
                        <div className="statusTitleHolder">
                            <div className="statusTitleActive">Создано</div>
                        </div>
                        <div className="statusTitleHolder">
                            <div className="statusTitleActive">В обработке</div>
                        </div>
                        <div className="statusTitleHolder">
                            <div className="statusTitlePassive">В пути</div>
                        </div>
                        <div className="statusTitleHolder">
                            <div className="statusTitlePassive">Доставлено</div>
                        </div>
                    </div>
                    <div className="statusLine"></div>
                    <div className="statusInfo">
                        <div className="statusDateHolder">
                            <div className="statusTitlePassive">15.03.2022</div>
                        </div>
                        <div className="statusDateHolder">
                            <div className="statusTitlePassive">16.03.2022</div>
                        </div>
                        <div className="statusDateHolder">
                            <div className="statusTitlePassive"></div>
                        </div>
                        <div className="statusDateHolder">
                            <div className="statusTitlePassive"></div>
                        </div>
                    </div>
                </div>
                <div className="statusdates">
                </div>
            </div>
            <div className="predictionDate">
                Предполагаемая дата доставки: 20.03.2022
            </div>
        </div>
    );
}