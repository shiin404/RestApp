import { useParams, Link } from "react-router-dom";
import { hotel } from './AllPlace';
import styles from './HotelPage.module.css';

export default function HotelPage() {
    const { id } = useParams();
    const Hotel = hotel.find((el) => el.id == id);

    if (!Hotel) return <div className={styles.notfound}>Отель не найден</div>;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                
                {/* Навигация */}
                <header className={styles.header}>
                    <Link to="/" className={styles.logo}>RestApp</Link>
                    <Link to="/profile/1">
                        <button className={styles.profileBtn}>Profile</button>
                    </Link>
                </header>

                {/* Главное фото */}
                <div className={styles.imageContainer}>
                    <img src={Hotel.imghotel} alt={Hotel.name} className={styles.mainImage} />
                    <div className={styles.imageOverlay}>
                        <Link to="/" className={styles.backLink}>← Назад в каталог</Link>
                    </div>
                </div>

                {/* Заголовок и кнопка */}
                <div className={styles.headerSection}>
                    <div>
                        <h1 className={styles.title}>{Hotel.name}</h1>
                        <p className={styles.location}>📍 {Hotel.location || "Центр города"}</p>
                    </div>
                    <Link to={`/bookhotel/${id}`}>
                        <button className={styles.bookingButton}>Забронировать номер</button>
                    </Link>
                </div>

                {/* Основной контент */}
                <div className={styles.mainGrid}>
                    
                    {/* Левая часть: Описание */}
                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Об отеле</h2>
                            <p className={styles.description}>{Hotel.des}</p>
                        </section>
                        
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Удобства</h2>
                            <div className={styles.amenities}>
                                <span>WiFi</span>
                                <span>Бассейн</span>
                                <span>Завтрак</span>
                                <span>Парковка</span>
                            </div>
                        </section>
                    </div>

                    {/* Правая часть: Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.infoCard}>
                            <h3 className={styles.cardTitle}>Информация</h3>
                            <div className={styles.infoRow}>
                                <span>Рейтинг</span>
                                <strong>⭐ 4.9</strong>
                            </div>
                            <div className={styles.infoRow}>
                                <span>Цена от</span>
                                <strong className={styles.priceText}>15 000 ₸</strong>
                            </div>
                            <hr className={styles.divider} />
                            <p className={styles.contacts}>
                                <strong>Контакты:</strong><br />
                                +7 (777) 000-11-22<br />
                                welcome@hotel.com
                            </p>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}