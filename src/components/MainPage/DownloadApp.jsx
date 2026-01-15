import { Link } from 'react-router-dom';
import styles from "./DownloadApp.module.css";
// Импортируй иконки, если они есть, или используй эмодзи как заглушки
import telegram from '../../assets/telegram.png';

export default function DownloadApp() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.heroSection}>
                    <div className={styles.statusBadge}>В разработке</div>
                    <h1 className={styles.title}>RestApp Mobile</h1>
                    <p className={styles.subtitle}>
                        Мы создаем идеальное приложение для ваших бронирований. 
                        Ваш личный ассистент будет всегда под рукой.
                    </p>
                </div>

                <div className={styles.progressCard}>
                    <div className={styles.progressHeader}>
                        <span>Готовность проекта</span>
                        <span>75%</span>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill}></div>
                    </div>
                </div>

                <div className={styles.platformGrid}>
                    <div className={styles.platformCard}>
                        <span className={styles.icon}>🍎</span>
                        <h3>iOS</h3>
                        <p>App Store</p>
                        <span className={styles.waitBadge}>Скоро</span>
                    </div>
                    <div className={styles.platformCard}>
                        <span className={styles.icon}>🤖</span>
                        <h3>Android</h3>
                        <p>Google Play</p>
                        <span className={styles.waitBadge}>Скоро</span>
                    </div>
                </div>

                <div className={styles.features}>
                    <div className={styles.featureItem}>
                        <h4>Уведомления</h4>
                        <p>Мгновенные напоминания о ваших бронях и заказах.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <h4>Оффлайн доступ</h4>
                        <p>Просматривайте свои заказы даже без интернета.</p>
                    </div>
                </div>

                <footer className={styles.footer}>
                    <p>Хотите узнать о запуске первым?</p>
                    <div>
                        <a href="https://t.me/RestAppKz_Bot" className={styles.tgButton}>
                            <img src={telegram} alt="tg" />
                            Наш телеграм бот
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}