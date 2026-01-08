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
        <div className={styles.wrapper}>
            
            {/* 1. Навигация */}
            <div className={styles.top}>
                <Link to="/" className={styles.back}>&larr; Назад к каталогу</Link>
            </div>

            {/* 2. Фото (Не на весь экран) */}
            <div className={styles.imageContainer}>
                <img src={Flowers.imgflower} alt={Flowers.name} className={styles.image} />
            </div>

            {/* 3. Заголовок и Кнопка */}
            <div className={styles.headerSection}>
                <h1 className={styles.title}>{Flowers.name}</h1>
                <button onClick={handleBuy} className={styles.bookingButton}>
                    Купить за {Flowers.price} ₽
                </button>
            </div>

            {/* 4. Контентная сетка */}
            <div className={styles.mainGrid}>
                
                <div className={styles.mainDescription}>
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}>Описание и уход</h2>
                        <p className={styles.description}>{description}</p>
                    </div>
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.sidebarCard}>
                        <h2 className={styles.sectionTitle}>Рейтинг</h2>
                        <div className={styles.rating}>
                            {renderStars(rating)} 
                            <span style={{color: '#888', marginLeft: '10px'}}>{rating}</span>
                        </div>
                    </div>

                    <div className={styles.sidebarCard}>
                        <h2 className={styles.sectionTitle}>Контакты</h2>
                        <p className={styles.infoText}>{contacts}</p>
                    </div>

                    <div className={styles.sidebarCard}>
                        <h2 className={styles.sectionTitle}>Доставка</h2>
                        <p className={styles.infoText}>Свежие цветы прибудут к вам в течение 1.5 часов.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
);
}