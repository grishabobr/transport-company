export default function Contacts() {
    return(
        <div class="content">
            <h1 class="pageTitle">Контакты</h1>
            <div class="contactList">
                <div class="contact">
                    <div class="contactIcon"><img src="assets/address.svg" class="contactSvg"/></div>
                    <div class="contactTitle">Москва, Ленинский пр-кт, д. 4, стр. 1</div>
                </div>
                <div class="contact">
                    <div class="contactIcon"><img src="assets/e-mail.svg" class="contactSvg"/></div>
                    <div class="contactTitle">m2004350@edu.misis.ru</div>
                </div>
                <div class="contact">
                    <div class="contactIcon"><img src="assets/phone.svg" class="contactSvg"/></div>
                    <div class="contactTitle">+7 (495) 123-45-67</div>
                </div>
            </div>
        </div>
    );
}