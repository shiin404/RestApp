import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { flower } from './AllPlace'; // Используем твой массив цветов
import { SubscribeContext } from './SubscribeContext';
import styles from './FlowerPage.module.css';

export default function FlowerPage() {
    const { id } = useParams();
    const Flowers = flower.find(item => item.id == id);
    let { sub, unsubscribe, subscribe } = useContext(SubscribeContext);
    let isSub = !!sub[id];

    // Компоненты кнопок в стиле референса
    const SubsComponent = () => (
        <button 
            className={`${styles.bookingButton} ${isSub ? styles.subButtonActive : ''}`} 
            onClick={() => (isSub ? unsubscribe(id) : subscribe(id, Flowers.name))}
        >
            {isSub ? 'В избранном' : 'В избранное'}
        </button>
    );

    const OrderComponent = () => (
        <Link to={`/buyflower/${id}`}>
            <button className={styles.bookingButton}>Заказать букет</button>
        </Link>
    );

    if (!Flowers) return <h1 className={styles.notfound}>Букет не найден</h1>;

    // --- Данные и Плейсхолдеры ---
    const description = Flowers.des || "Этот великолепный букет собран из свежайших цветов. Мы гарантируем высокое качество и долговечность каждой композиции, созданной нашими флористами.";
    const rating = Flowers.rating || 4.9;
    
    // Характеристики букета (вместо меню)
    const specs = [
        { name: 'Состав', desc: 'Розы, Эвкалипт, авторская упаковка', price: Flowers.price + ' ₽' },
        { name: 'Высота', desc: 'Примерно 50-60 см', price: 'Standard' },
        { name: 'Доставка', desc: 'В пределах города бесплатно', price: '0 ₽' },
    ];

    const gallery = Flowers.gallery || [Flowers.imgflower, Flowers.imgflower, Flowers.imgflower];
    
    const reviews = [
        { name: 'Анна К.', text: 'Букет просто волшебный! Цветы простояли больше недели, аромат на всю комнату.' },
        { name: 'Дмитрий Л.', text: 'Заказывал доставку сюрпризом, привезли вовремя. Сервис на высоте.' },
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? styles.starFilled : styles.starEmpty}>★</span>
            );
        }
        return stars;
    };

    return (
        <div className={styles.container}>
            {/* Верхняя навигация */}
            <header className={styles.header}>
                <Link to="/" className={styles.back}>← К списку цветов</Link>
                <div style={{fontSize: '18px', fontWeight: 'bold'}}>RestApp Flowers</div>
            </header>

            <div className={styles.content}>
                
                {/* Блок с изображением */}
                <div className={styles.imageWrapper}>
                    <img src={Flowers.imgflower} alt={Flowers.name} className={styles.image} />
                </div>

                {/* Заголовок и кнопки управления */}
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

                <div className={styles.mainGrid}>
                    {/* Левая колонка */}
                    <div>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Описание букета</h2>
                            <p className={styles.description}>{description}</p>
                        </div>

                        <div className={styles.section} style={{marginTop: '40px'}}>
                            <h2 className={styles.sectionTitle}>Уход за цветами</h2>
                            <p className={styles.infoText}>Меняйте воду каждый день</p>
                            <p className={styles.infoText}>Подрезайте стебли под углом 45°</p>
                        </div>
                    </div>

                    {/* Правая колонка - Характеристики (стиль Меню) */}
                    <div className={styles.menuCard}>
                        <h2 className={styles.sectionTitle}>Детали</h2>
                        {specs.map((item, index) => (
                            <div key={index} className={styles.dishCard}>
                                <div>
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
    );
}