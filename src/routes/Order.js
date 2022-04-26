export default function Order() {
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
                    234-836-209
                </div>
            </div>
        </div>
    </div>
    );
}