import { flower } from './AllPlace';
import { useParams, Link } from "react-router-dom";
import styles from './FlowerPage.module.css';

export default function FlowerPage() {
    const { id } = useParams();
    const Flowers = flower.find(element => element.id == id);

    if (!Flowers) return <h1 className={styles.notfound}>Цветок не найден</h1>;

    // Плейсхолдеры для дополнительных данных (если есть в объекте flower)
    const rating = Flowers.rating || 4.8; // Рейтинг от 1 до 5
    const contacts = Flowers.contacts || 'Телефон: +7 (495) 123-45-67 | Email: info@flowershop.com';

    // Функция для рендеринга звёзд рейтинга
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? styles.starFilled : styles.starEmpty}>★</span>
            );
        }
        return stars;
    };

    // Обработчик покупки (простой alert, можно заменить на добавление в корзину)
    const handleBuy = () => {
        alert(`Спасибо за покупку! Цветок: ${Flowers.name}, Цена: ${Flowers.price} ₽`);
    };

    return (
        <div className={styles.container}>
            <Link to={`/`}>Назад</Link>
            <div className={styles.card}>
                <img src={Flowers.imgflower} alt={Flowers.name} className={styles.image} />

                <div className={styles.content}>
                    <h1 className={styles.title}>{Flowers.name}</h1>

                    {/* Рейтинг */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-star"></i> Рейтинг</h2>
                        <div className={styles.rating}>
                            {renderStars(rating)} <span className={styles.ratingText}>{rating}/5</span>
                        </div>
                    </div>

                    {/* Описание */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-leaf"></i> Описание</h2>
                        <p className={styles.description}>{Flowers.des}</p>
                    </div>

                    {/* Цена */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-tag"></i> Цена</h2>
                        <p className={styles.price}>{Flowers.price} ₽</p>
                    </div>

                    {/* Контакты */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-phone"></i> Контакты для заказа</h2>
                        <p className={styles.contacts}>{contacts}</p>
                    </div>

                    {/* Кнопка покупки */}
                    <div className={styles.buySection}>
                        <button onClick={handleBuy} className={styles.buyButton}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}