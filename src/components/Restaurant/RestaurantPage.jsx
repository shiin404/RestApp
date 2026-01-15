import { useContext, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurant } from '../AllData/AllPlace';
import { SubscribeContext } from '../AllData/SubscribeContext';
import styles from './RestaurantPage.module.css';

export default function RestaurantPage() {
    const { id } = useParams();
    const { sub, unsubscribe, subscribe } = useContext(SubscribeContext);

    const currentRest = useMemo(() => 
        restaurant.find(item => item.id === Number(id)), 
        [id]
    );

    const isSubscribed = !!sub[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!currentRest) {
        return <h1 className={styles.notfound}>Ресторан не найден</h1>;
    }

    // --- ГЕНЕРАЦИЯ ДАННЫХ ДЛЯ МЕНЮ И ОТЗЫВОВ ---
    const defaultMenu = [
        { name: 'Стейк Рибай', desc: 'Премиальная говядина с соусом из печеного чеснока.', price: '12 500 ₸' },
        { name: 'Салат Нисуаз', desc: 'Свежий тунец, перепелиные яйца и горчичная заправка.', price: '4 800 ₸' },
        { name: 'Паста Карбонара', desc: 'Классический рецепт с панчеттой и пармезаном.', price: '3 900 ₸' },
        { name: 'Тирамису', desc: 'Нежный десерт на основе маскарпоне и кофе.', price: '2 500 ₸' },
    ];

    const defaultReviews = [
        { name: 'Арман И.', text: 'Потрясающее место! Обслуживание на высшем уровне, еда очень вкусная.' },
        { name: 'Мария С.', text: 'Очень уютный интерьер. Идеально подходит для романтического ужина.' },
        { name: 'Данияр К.', text: 'Лучший стейк, который я пробовал в городе. Рекомендую!' },
    ];

    // Деструктуризация с использованием придуманных данных
    const {
        name,
        imgrest,
        rating = 4.9,
        des: description,
        city = "г. Астана",
        address = "Адрес уточняется",
        phone = "+7 (777) 000-00-00",
        schedule = [],
        menu = defaultMenu, // Если в AllPlace пусто, берем наше меню
        reviews = defaultReviews // Если в AllPlace пусто, берем наши отзывы
    } = currentRest;

    const renderStars = (score) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < Math.floor(score) ? styles.starFilled : styles.starEmpty}>★</span>
        ));
    };

    const handleSubClick = () => {
        isSubscribed ? unsubscribe(id) : subscribe(id, name);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to="/" className={styles.back}>← На главную</Link>
                <div className={styles.brandName}>RestApp</div>
            </header>

            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <img src={imgrest} alt={name} className={styles.image} />
                </div>

                <div className={styles.infoHead}>
                    <header>
                        <h1 className={styles.title}>{name}</h1>
                        <div className={styles.ratingInfo}>
                            {renderStars(rating)} 
                            <span className={styles.ratingText}>{rating}</span>
                        </div>
                    </header>
                    <div className={styles.actions}>
                        <Link to={`/booking/${id}`}>
                            <button className={styles.bookingButton}>Бронировать</button>
                        </Link>
                        <button 
                            className={`${styles.bookingButton} ${isSubscribed ? styles.activeSub : ''}`} 
                            onClick={handleSubClick}
                        >
                            {isSubscribed ? 'Отписаться' : 'Подписаться'}
                        </button>
                    </div>
                </div>

                <div className={styles.mainGrid}>
                    <section className={styles.leftCol}>
                        <article className={styles.section}>
                            <h2 className={styles.sectionTitle}>О концепции</h2>
                            <p className={styles.description}>
                                {description || "Уникальный гастрономический опыт в самом сердце города."}
                            </p>
                        </article>

                        <article className={styles.section} style={{marginTop: '40px'}}>
                            <h2 className={styles.sectionTitle}>Контакты</h2>
                            <p className={styles.infoText}>{city}, {address}</p>
                            <p className={styles.infoText}>{phone}</p>
                        </article>

                        {schedule.length > 0 && (
                            <div className={styles.scheduleBlock}>
                                <h3 className={styles.sectionTitle}>График работы</h3>
                                {schedule.map((item, index) => (
                                    <div key={index} className={styles.scheduleRow}>
                                        <span className={styles.dayText}>{item.day}</span>
                                        <span className={styles.timeText}>{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    <aside className={styles.rightCol}>
                        <div className={styles.menuCard}>
                            <h2 className={styles.sectionTitle}>Меню</h2>
                            {menu.map((dish, index) => (
                                <div key={index} className={styles.dishCard}>
                                    <div className={styles.dishContent}>
                                        <h3 className={styles.dishName}>{dish.name}</h3>
                                        <p className={styles.dishDesc}>{dish.desc}</p>
                                    </div>
                                    <span className={styles.dishPrice}>{dish.price}</span>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>

                <section className={styles.reviewsSection}>
                    <h2 className={styles.sectionTitle}>Последние отзывы</h2>
                    <div className={styles.reviewsGrid}>
                        {reviews.map((review, index) => (
                            <div key={index} className={styles.reviewCard}>
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