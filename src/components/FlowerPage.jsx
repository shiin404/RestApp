import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { flower } from './AllPlace'; 
import { SubscribeContext } from './SubscribeContext';
import styles from './FlowerPage.module.css';

export default function FlowerPage() {
    const { id } = useParams();
    const Flowers = flower.find(item => item.id == id);
    let { sub, unsubscribe, subscribe } = useContext(SubscribeContext);
    let isSub = !!sub[id];
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const SubsComponent = () => (
        <button 
            className={styles.bookingButton} 
            onClick={() => (isSub ? unsubscribe(id) : subscribe(id, Flowers.name))}
        >
            {isSub ? 'Отписаться' : 'Подписаться'}
        </button>
    );

    const OrderComponent = () => (
        <Link to={`/buyflower/${id}`} className={styles.linkButton}>
            <button className={styles.bookingButton}>Заказать букет</button>
        </Link>
    );

    if (!Flowers) return <h1 className={styles.notfound}>Букет не найден</h1>;

    const description = Flowers.des || "Этот великолепный букет собран из свежайших цветов. Мы гарантируем высокое качество и долговечность каждой композиции.";
    const rating = Flowers.rating || 4.9;
    
    const specs = [
        { name: 'Состав', desc: 'Розы, Эвкалипт, авторская упаковка', price: Flowers.cheque },
        { name: 'Высота', desc: 'Примерно 50-60 см', price: 'Standard' },
        { name: 'Доставка', desc: 'В пределах города бесплатно', price: '1000 ₸' },
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(<span key={i} className={i <= rating ? styles.starFilled : styles.starEmpty}>★</span>);
        }
        return stars;
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to="/" className={styles.back}>← На главную</Link>
                <div style={{fontSize: '18px', fontWeight: 'bold'}}>RestApp Flowers</div>
            </header>

            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <img src={Flowers.imgflower} alt={Flowers.name} className={styles.image} />
                </div>

                <div className={styles.infoHead}>
                    <div>
                        <h1 className={styles.title}>{Flowers.name}</h1>
                        <div className={styles.ratingInfo}>
                            {renderStars(rating)} <span className={styles.ratingText}>{rating}</span>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <OrderComponent />
                        <SubsComponent />
                    </div>
                </div>

                {/* Единая сетка */}
                <div className={styles.mainGrid}>
                    {/* Левая колонка */}
                    <div className={styles.leftCol}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Описание</h2>
                            <p className={styles.description}>{description}</p>
                        </div>

                        <div className={styles.section} style={{marginTop: '40px'}}>
                            <h2 className={styles.sectionTitle}>Контакты</h2>
                            <p className={styles.infoText}>{Flowers.city} {Flowers.address}</p>
                            <p className={styles.infoText}>{Flowers.phone}</p>
                        </div>

                        <div className={styles.scheduleBlock}>
                            <h3 className={styles.sectionTitle}>График работы</h3>
                            {Flowers.schedule && Flowers.schedule.map((item, index) => (
                                <div key={index} className={styles.scheduleRow}>
                                    <span className={styles.dayText}>{item.day}</span>
                                    <span className={styles.timeText}>{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Правая колонка */}
                    <div className={styles.rightCol}>
                        <div className={styles.menuCard}>
                            <h2 className={styles.sectionTitle}>Детали</h2>
                            {specs.map((item, index) => (
                                <div key={index} className={styles.dishCard}>
                                    <div className={styles.dishContent}>
                                        <h3 className={styles.dishName}>{item.name}</h3>
                                        <p className={styles.dishDesc}>{item.desc}</p>
                                    </div>
                                    <span className={styles.dishPrice}>{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}