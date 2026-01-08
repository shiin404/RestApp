import styles from "./Footer.module.css"; // убедись, что файл именно так называется
import telegram from '../assets/telegram.png'
import whatspp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.jpeg'
export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContent}>

        <div className={styles.footerCol}>
          <h4>RestApp</h4>
          <p className={styles.topSlogan}>Лучшие сервисы для вашего комфорта</p>
          <div className={styles.footerSocialIcons}>
            <a href="https://wa.me/+77028872323" target="_blank" rel="noreferrer">
              <img src={whatspp} alt="WhatsApp" />
            </a>
            <a href="https://t.me/restapp_support" target="_blank" rel="noreferrer">
              <img src={telegram} alt="Telegram" />
            </a>
            <a href="https://www.instagram.com/restapp.kz/" target="_blank" rel="noreferrer">
              <img src={instagram } alt="Instagram" />
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Навигация</h4>
          <ul>
            <li><a href="#">Рестораны</a></li>
            <li><a href="#">Гостиницы</a></li>
            <li><a href="#">Цветочные магазины</a></li>
            <li><a href="#">Популярное</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Компания</h4>
          <ul>
            <li><a href="#">О проекте</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Поддержка</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Приложение</h4>
          <button className={styles.downloadApp}>Скачать App</button>
        </div>

      </div>

      <div className={styles.footerBottom}>
        ©️ 2025 RestApp. Все права защищены.
      </div>
    </footer>
  );
}
