import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { hotel } from './AllPlace';
import { SubscribeContext } from './SubscribeContext'; // Проверь путь к контексту
import styles from './HotelPage.module.css';

export default function HotelPage() {
    const { id } = useParams();
    
    // Поиск отеля в базе данных
    const Hotel = hotel.find((el) => el.id == id);

    // Подключаем контекст подписок (как в ресторане)
    const { sub, unsubscribe, subscribe } = useContext(SubscribeContext);
    const isSub = !!sub[id];

    if (!Hotel) return <div className={styles.notfound}>Отель не найден</div>;

    // --- Данные (Плейсхолдеры) ---
    const rating = Hotel.rating || 4.9;
    const address = Hotel.location || "ул. Центральная, 10, Курортная зона";
    const description = Hotel.des || "Наслаждайтесь премиальным отдыхом в самом сердце города. Высочайший уровень сервиса и уникальные дизайнерские номера.";
    const amenities = ["Бесплатный WiFi", "Бассейн с подогревом", "Завтрак (шведский стол)", "Охраняемая парковка", "SPA-центр"];
    const gallery = Hotel.gallery || [Hotel.imghotel, Hotel.imghotel, Hotel.imghotel, Hotel.imghotel];
    
    const reviews = [
        { name: 'Александр П.', text: 'Прекрасный вид из окна и очень мягкие кровати. Вернемся снова!' },
        { name: 'Мария К.', text: 'Лучший завтрак в моей жизни. Сервис на высоте, персонал очень вежливый.' },
    ];

    // Функция отрисовки звезд
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= Math.floor(rating) ? styles.starFilled : styles.starEmpty}>★</span>
            );
        }
        return stars;
    };

    const handleFormSubscribe = (e) => {
        e.preventDefault();
        alert(`Email ${e.target.email.value} подписан на новости ${Hotel.name}`);
        e.target.reset();
    };

    return (
        <div className={styles.container}>
            {/* Навигация */}
            <header className={styles.header}>
                <Link to="/" className={styles.back}>← Назад в каталог</Link>
                <div className={styles.logoText}>RestApp</div>
            </header>

            <div className={styles.content}>
                
                {/* Главное фото */}
                <div className={styles.imageWrapper}>
                    <img src={Hotel.imghotel} alt={Hotel.name} className={styles.image} />
                </div>

                {/* Заголовок, Рейтинг и Кнопки */}
                <div className={styles.infoHead}>
                    <div className={styles.titleBlock}>
                        <h1 className={styles.title}>{Hotel.name}</h1>
                        <div className={styles.ratingRow}>
                            {renderStars(rating)}
                            <span className={styles.ratingText}>{rating}</span>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Link to={`/bookhotel/${id}`} className={styles.actionLink}>
                            <button className={styles.bookingButton}>Забронировать</button>
                        </Link>
                        <button 
                            className={`${styles.subButton} ${isSub ? styles.subButtonActive : ''}`}
                            onClick={() => (isSub ? unsubscribe(id) : subscribe(id, Hotel.name))}
                        >
                            {isSub ? 'Отписаться' : 'Подписаться'}
                        </button>
                    </div>
                </div>

                {/* Основная сетка */}
                <div className={styles.mainGrid}>
                    {/* Левая сторона: Описание и Контакты */}
                    <div className={styles.leftCol}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Об отеле</h2>
                            <p className={styles.description}>{description}</p>
                        </section>

                        <section className={styles.section} style={{marginTop: '40px'}}>
                            <h2 className={styles.sectionTitle}>Локация</h2>
                            <p className={styles.infoText}>📍 {address}</p>
                            <p className={styles.infoText}>📞 +7 (777) 000-11-22</p>
                        </section>
                    </div>

                    {/* Правая сторона: Удобства */}
                    <aside className={styles.menuCard}>
                        <h2 className={styles.sectionTitle}>Удобства</h2>
                        {amenities.map((item, index) => (
                            <div key={index} className={styles.dishCard}>
                                <span className={styles.dishName}>{item}</span>
                                <span className={styles.checkIcon}>✓</span>
                            </div>
                        ))}
                    </aside>
                </div>

                {/* Галерея со скроллом */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Галерея</h2>
                    <div className={styles.galleryWrapper}>
                        <div className={styles.galleryGrid}>
                            {gallery.map((img, index) => (
                                <img key={index} src={img} className={styles.galleryImage} alt="Hotel view" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Отзывы */}
                <div className={styles.section} style={{marginTop: '60px'}}>
                    <h2 className={styles.sectionTitle}>Отзывы гостей</h2>
                    <div className={styles.reviewsList}>
                        {reviews.map((rev, index) => (
                            <div key={index} className={styles.reviewCard}>
                                <div className={styles.reviewName}>{rev.name}</div>
                                <p className={styles.reviewText}>{rev.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}