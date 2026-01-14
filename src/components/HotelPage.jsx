import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { hotel } from './AllPlace';
import { SubscribeContext } from './SubscribeContext';
import styles from './HotelPage.module.css';

export default function HotelPage() {
    const { id } = useParams();
    
    const Hotel = hotel.find((el) => el.id == id);
    const { sub, unsubscribe, subscribe } = useContext(SubscribeContext);
    const isSub = !!sub[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!Hotel) return <div className={styles.notfound}>Отель не найден</div>;

    const rating = Hotel.rating || 4.9;
    const address = Hotel.location || "ул. Центральная, 10, Курортная зона";
    const description = Hotel.des || "Наслаждайтесь премиальным отдыхом в самом сердце города. Высочайший уровень сервиса и уникальные дизайнерские номера.";
    const amenities = ["Бесплатный WiFi", "Бассейн с подогревом", "Завтрак (шведский стол)", "Охраняемая парковка", "SPA-центр"];
    
    // Оставили 3 основные ссылки для галереи
    const gallery = [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop"
    ];
    
    const reviews = [
        { name: 'Александр П.', text: 'Прекрасный вид из окна и очень мягкие кровати. Вернемся снова!' },
        { name: 'Мария К.', text: 'Лучший завтрак в моей жизни. Сервис на высоте, персонал очень вежливый.' },
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= Math.floor(rating) ? styles.starFilled : styles.starEmpty}>★</span>
            );
        }
        return stars;
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to="/hotels" className={styles.back}>← Назад в каталог</Link>
                <div className={styles.logoText}>RestApp</div>
            </header>

            <div className={styles.content}>
                
                <div className={styles.imageWrapper}>
                    <img 
                        src={Hotel.imghotel || "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"} 
                        alt={Hotel.name} 
                        className={styles.image} 
                    />
                </div>

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

                <div className={styles.mainGrid}>
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

                {/* Галерея: статичная сетка на 3 фото */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Галерея номеров</h2>
                    <div className={styles.galleryGrid}>
                        {gallery.map((img, index) => (
                            <img key={index} src={img} className={styles.galleryImage} alt="Hotel interior" />
                        ))}
                    </div>
                </div>

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