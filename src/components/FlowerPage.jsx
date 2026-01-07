import { flower } from './AllPlace';
import { useParams, Link } from "react-router-dom";
import styles from './FlowerPage.module.css';

export default function FlowerPage() {
    const { id } = useParams();
    const Flowers = flower.find(element => element.id == id);

    if (!Flowers) return <h1 className={styles.notfound}>Цветок не найден</h1>;

    // Плейсхолдеры для дополнительных данных
    const rating = Flowers.rating || 4.8;
    // Описание цветка
    const description = Flowers.des || "Этот великолепный цветок символизирует чистоту и нежность. Он идеально подходит для подарка на любое торжественное событие или для украшения вашего дома.";
    const contacts = Flowers.contacts || 'Телефон: +7 (495) 123-45-67 | Email: info@flowershop.com';

    // Функция для рендеринга звёзд рейтинга
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalf = rating - fullStars >= 0.5;

        for (let i = 1; i <= 5; i++) {
            let starClass = styles.starEmpty;
            if (i <= fullStars) {
                starClass = styles.starFilled;
            } else if (i === fullStars + 1 && hasHalf) {
                // В CSS нужно добавить стили для половинчатой звезды, но для простоты пока используем styles.starFilled
                starClass = styles.starFilled; 
            }
            stars.push(<span key={i} className={starClass}>★</span>);
        }
        return stars;
    };

    // Обработчик покупки
    const handleBuy = () => {
        alert(`Спасибо за покупку! Цветок: ${Flowers.name}, Цена: ${Flowers.price} ₽`);
    };

    return (
        <div className={styles.container}>
            {/* 1. Секция Героя (Обложка) */}
            <div className={styles.hero}>
                <img src={Flowers.imgflower} alt={Flowers.name} className={styles.image} />
                
                <div className={styles.heroContent}>
                    {/* Кнопка Назад */}
                    <div className={styles.top}>
                        <Link to={`/`} className={styles.back}>
                            &larr; Назад
                        </Link>
                    </div>

                    <div className={styles.titleArea}>
                        <h1 className={styles.title}>{Flowers.name}</h1>
                        <div className={styles.bookingArea}>
                            <button onClick={handleBuy} className={styles.bookingButton}>
                                Купить за {Flowers.price} ₽
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Основной Контент (Сетка) */}
            <div className={styles.content}>
                <div className={styles.mainInfoGrid}>
                    
                    {/* Левая колонка: Описание */}
                    <div className={styles.mainDescription}>
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}><i className="fas fa-leaf"></i> Детали и уход</h2>
                            <p className={styles.description}>{description}</p>
                            <p className={styles.description}>
                                **Доступные цвета:** Красный, Розовый, Белый.<br/>
                                **Инструкция по уходу:** Требует умеренного полива и яркого, но рассеянного света.
                            </p>
                        </div>
                    </div>

                    {/* Правая колонка: Инфо-блок (Рейтинг, Контакты) */}
                    <div className={styles.sidebar}>
                        
                        {/* Рейтинг */}
                        <div className={`${styles.infoSection} ${styles.sidebarInfo}`}>
                            <h2 className={styles.sectionTitle}><i className="fas fa-star"></i> Рейтинг нежности</h2>
                            <div className={styles.rating}>
                                {renderStars(rating)} <span className={styles.ratingText}>{rating}/5</span>
                            </div>
                        </div>

                        {/* Контакты */}
                        <div className={`${styles.infoSection} ${styles.sidebarInfo}`}>
                            <h2 className={styles.sectionTitle}><i className="fas fa-phone"></i> Контакты для заказа</h2>
                            <p className={styles.infoText}>{contacts}</p>
                            <p className={styles.infoText}>
                                **Доставка:** 1-2 часа по городу.
                            </p>
                        </div>

                        {/* Дополнительная информация */}
                        <div className={`${styles.infoSection} ${styles.sidebarInfo}`}>
                            <h2 className={styles.sectionTitle}><i className="fas fa-truck"></i> Гарантия свежести</h2>
                            <p className={styles.infoText}>
                                Мы гарантируем, что ваш букет будет свежим в течение 5 дней или мы заменим его бесплатно.
                            </p>
                        </div>
                        
                    </div>
                </div>
                
                {/* Здесь могут быть другие секции: Похожие цветы, Отзывы и т.д. */}
                <div className={styles.secondaryGrid}>
                    {/* ... (Дополнительный контент) ... */}
                </div>

            </div>
        </div>
    );
}