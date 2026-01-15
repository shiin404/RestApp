import styles from "./Footer.module.css";
import telegram from '../../assets/telegram.png';
import whatspp from '../../assets/whatsapp.png';
import instagram from '../../assets/instagram.jpeg';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContent}>

        <div className={styles.footerCol}>
          <h4 className={styles.logo}>RestApp</h4>
          <p className={styles.topSlogan}>Ваш ключ к комфорту в один клик</p>
          <div className={styles.footerSocialIcons}>
            <a href="https://wa.me/+77028872323" target="_blank" rel="noreferrer">
              <img src={whatspp} alt="WhatsApp" />
            </a>
            <a href="https://t.me/restapp_support" target="_blank" rel="noreferrer">
              <img src={telegram} alt="Telegram" />
            </a>
            <a href="https://www.instagram.com/restapp.kz/" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Навигация</h4>
          <ul className={styles.navList}>
            <li><Link to="/restaurants">Рестораны</Link></li>
            <li><Link to="/hotels">Гостиницы</Link></li>
            <li><Link to="/flowers">Цветочные магазины</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Мобильный сервис</h4>
          <Link to="/app" className={styles.downloadLink}>
            <button className={styles.downloadApp}>
              Скачать приложение
              <span className={styles.btnArrow}>→</span>
            </button>
          </Link>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <div className={styles.divider}></div>
        <p>©️ 2026 RestApp. Все права защищены.</p>
      </div>
    </footer>
  );
}