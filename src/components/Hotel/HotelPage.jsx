import { useContext, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { hotel } from '../AllData/AllPlace';
import { SubscribeContext } from '../AllData/SubscribeContext';
import styles from './HotelPage.module.css';
import { useNavigate } from 'react-router-dom';
const AMENITIES_LIST = ["Бесплатный WiFi", "Бассейн с подогревом", "Завтрак (шведский стол)", "Охраняемая парковка", "SPA-центр"];

const GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop"
];

const REVIEWS_DATA = [
    { id: 1, name: 'Александр П.', text: 'Прекрасный вид из окна и очень мягкие кровати. Вернемся снова!' },
    { id: 2, name: 'Мария К.', text: 'Лучший завтрак в моей жизни. Сервис на высоте, персонал очень вежливый.' },
];

export default function HotelPage() {
    const { id } = useParams();
    const { sub, unsubscribe, subscribe } = useContext(SubscribeContext);

    const currentHotel = useMemo(() => 
        hotel.find((item) => item.id === Number(id)), 
        [id]
    );

    const isSubscribed = !!sub[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    const navigate = useNavigate();
    if (!currentHotel) {
        return <div className={styles.notfound}>Отель не найден</div>;
    }

    const {
        name,
        imghotel,
        rating = 4.9,
        location: address = "ул. Центральная, 10, Курортная зона",
        des: description = "Наслаждайтесь премиальным отдыхом в самом сердце города."
    } = currentHotel;

    const renderStars = (score) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span 
                key={i} 
                className={i < Math.floor(score) ? styles.starFilled : styles.starEmpty}
            >
                ★
            </span>
        ));
    };

    const handleSubscriptionToggle = () => {
        isSubscribed ? unsubscribe(id) : subscribe(id, name);
    };

    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <button onClick={() => navigate(-1)} className={styles.backButton}>
                    ← Назад
                </button>
                <div className={styles.imageWrapper}>
                    <img 
                        src={imghotel || "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"} 
                        alt={name} 
                        className={styles.image} 
                    />
                </div>

                <div className={styles.infoHead}>
                    <div className={styles.titleBlock}>
                        <h1 className={styles.title}>{name}</h1>
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
                            className={`${styles.subButton} ${isSubscribed ? styles.subButtonActive : ''}`}
                            onClick={handleSubscriptionToggle}
                        >
                            {isSubscribed ? 'Отписаться' : 'Подписаться'}
                        </button>
                    </div>
                </div>

                <div className={styles.mainGrid}>
                    <div className={styles.leftCol}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Об отеле</h2>
                            <p className={styles.description}>{description}</p>
                        </section>

                        <section className={styles.section} style={{ marginTop: '40px' }}>
                            <h2 className={styles.sectionTitle}>Контакты</h2>
                            <p className={styles.infoText}>{address}</p>
                            <p className={styles.infoText}> +77770001122</p>
                        </section>
                    </div>

                    <aside className={styles.menuCard}>
                        <h2 className={styles.sectionTitle}>Удобства</h2>
                        {AMENITIES_LIST.map((item, index) => (
                            <div key={index} className={styles.dishCard}>
                                <span className={styles.dishName}>{item}</span>
                                <span className={styles.checkIcon}>✓</span>
                            </div>
                        ))}
                    </aside>
                </div>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Галерея номеров</h2>
                    <div className={styles.galleryGrid}>
                        {GALLERY_IMAGES.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                className={styles.galleryImage} 
                                alt={`${name} interior ${index + 1}`} 
                            />
                        ))}
                    </div>
                </section>

                <section className={styles.section} style={{ marginTop: '60px' }}>
                    <h2 className={styles.sectionTitle}>Отзывы гостей</h2>
                    <div className={styles.reviewsList}>
                        {REVIEWS_DATA.map((review) => (
                            <div key={review.id} className={styles.reviewCard}>
                                <div className={styles.reviewName}>{review.name}</div>
                                <p className={styles.reviewText}>{review.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}