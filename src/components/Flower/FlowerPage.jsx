import { useContext, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { flower } from '../AllData/AllPlace'; 
import { SubscribeContext } from '../AllData/SubscribeContext';
import styles from './FlowerPage.module.css';
import { useNavigate } from 'react-router-dom';
export default function FlowerPage() {
    const { id } = useParams();
    const { sub, unsubscribe, subscribe } = useContext(SubscribeContext);

    const currentFlower = useMemo(() => 
        flower.find(item => item.id === Number(id)), 
        [id]
    );

    const isSubscribed = !!sub[id];
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!currentFlower) {
        return <h1 className={styles.notfound}>Букет не найден</h1>;
    }

    const { 
        name, 
        imgflower, 
        des, 
        rating = 4.9, 
        cheque, 
        city, 
        address, 
        phone, 
        schedule = [] 
    } = currentFlower;

    const flowerSpecs = [
        { id: 'composition', name: 'Состав', desc: 'Розы, Эвкалипт, авторская упаковка', value: cheque },
        { id: 'height', name: 'Высота', desc: 'Примерно 50-60 см', value: 'Standard' },
        { id: 'delivery', name: 'Доставка', desc: 'В пределах города бесплатно', value: '1000 ₸' },
    ];

    const toggleSubscription = () => {
        isSubscribed ? unsubscribe(id) : subscribe(id, name);
    };

    const renderStars = (currentRating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span 
                key={i} 
                className={i < Math.floor(currentRating) ? styles.starFilled : styles.starEmpty}
            >
                ★
            </span>
        ));
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button onClick={() => navigate(-1)} className={styles.backButton}>
                    ← Назад
                </button>
                <div className={styles.imageWrapper}>
                    <img src={imgflower} alt={name} className={styles.image} />
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
                        <Link to={`/buyflower/${id}`} className={styles.linkButton}>
                            <button className={styles.bookingButton}>Заказать букет</button>
                        </Link>
                        <button 
                            className={styles.bookingButton} 
                            onClick={toggleSubscription}
                        >
                            {isSubscribed ? 'Отписаться' : 'Подписаться'}
                        </button>
                    </div>
                </div>

                <div className={styles.mainGrid}>
                    <section className={styles.leftCol}>
                        <article className={styles.section}>
                            <h2 className={styles.sectionTitle}>Описание</h2>
                            <p className={styles.description}>
                                {des || "Этот великолепный букет собран из свежайших цветов. Мы гарантируем высокое качество и долговечность каждой композиции."}
                            </p>
                        </article>

                        <article className={styles.section} style={{ marginTop: '40px' }}>
                            <h2 className={styles.sectionTitle}>Контакты</h2>
                            <p className={styles.infoText}>{city} {address}</p>
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
                            <h2 className={styles.sectionTitle}>Детали</h2>
                            {flowerSpecs.map((spec) => (
                                <div key={spec.id} className={styles.dishCard}>
                                    <div className={styles.dishContent}>
                                        <h3 className={styles.dishName}>{spec.name}</h3>
                                        <p className={styles.dishDesc}>{spec.desc}</p>
                                    </div>
                                    <span className={styles.dishPrice}>{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}