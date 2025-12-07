import { useParams, Link } from "react-router-dom";
import { restaurant } from './AllPlace';
import styles from './RestaurantPage.module.css';

export default function RestaurantPage() {
    const { id } = useParams();
    const Rest = restaurant.find(item => item.id == id);

    if (!Rest) return <h1 className={styles.notfound}>Ресторан не найден</h1>;

    // Плейсхолдеры для меню, адреса и графика (замените на реальные данные из Rest)
    const menu = Rest.menu || [
        { img: 'https://via.placeholder.com/150', name: 'Паста Карбонара', desc: 'Классическая итальянская паста с беконом и яйцом.', price: '450 ₽' },
        { img: 'https://via.placeholder.com/150', name: 'Стейк Рибай', desc: 'Сочный стейк из говядины с гарниром.', price: '1200 ₽' },
        { img: 'https://via.placeholder.com/150', name: 'Тирамису', desc: 'Десерт с кофе и маскарпоне.', price: '350 ₽' },
    ];
    const address = Rest.address || 'ул. Ленина, 10, Москва';
    const schedule = Rest.schedule || [
        { day: 'Понедельник - Пятница', time: '10:00 - 22:00' },
        { day: 'Суббота - Воскресенье', time: '11:00 - 23:00' },
    ];

    // Новые плейсхолдеры для добавленных разделов
    const rating = Rest.rating || 4.5; // Рейтинг от 1 до 5
    const reviews = Rest.reviews || [
        { name: 'Анна', text: 'Отличное место! Еда потрясающая, атмосфера уютная.' },
        { name: 'Михаил', text: 'Рекомендую пасту — просто шедевр.' },
    ];
    const contacts = Rest.contacts || {
        phone: '+7 (495) 123-45-67',
        email: 'info@restaurant.com',
        social: 'https://instagram.com/restaurant',
    };
    const gallery = Rest.gallery || [
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
    ];

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

    // Обработчик подписки (простой alert, можно заменить на API)
    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        alert(`Спасибо за подписку! Email: ${email}`);
        e.target.reset();
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Link to="/" className={styles.back}>← Назад</Link>
            </div>

            <div className={styles.card}>
                <img src={Rest.imgrest} alt={Rest.name} className={styles.image} />

                <div className={styles.content}>
                    <h1 className={styles.title}>{Rest.name}</h1>
                    <p className={styles.description}>{Rest.des}</p>

                    {/* Рейтинг */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-star"></i> Рейтинг</h2>
                        <div className={styles.rating}>
                            {renderStars(rating)} <span className={styles.ratingText}>{rating}/5</span>
                        </div>
                    </div>

                    {/* Адрес */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-map-marker-alt"></i> Адрес</h2>
                        <p className={styles.infoText}>{address}</p>
                    </div>

                    {/* График работы */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-clock"></i> График работы</h2>
                        <ul className={styles.scheduleList}>
                            {schedule.map((item, index) => (
                                <li key={index} className={styles.scheduleItem}>
                                    <strong>{item.day}:</strong> {item.time}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Меню */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-utensils"></i> Меню</h2>
                        <div className={styles.menuGrid}>
                            {menu.map((dish, index) => (
                                <div key={index} className={styles.dishCard}>
                                    <img src={dish.img} alt={dish.name} className={styles.dishImage} />
                                    <div className={styles.dishContent}>
                                        <h3 className={styles.dishName}>{dish.name}</h3>
                                        <p className={styles.dishDesc}>{dish.desc}</p>
                                        <span className={styles.dishPrice}>{dish.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Отзывы */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-comments"></i> Отзывы</h2>
                        <div className={styles.reviewsList}>
                            {reviews.map((review, index) => (
                                <div key={index} className={styles.reviewCard}>
                                    <h4 className={styles.reviewName}>{review.name}</h4>
                                    <p className={styles.reviewText}>{review.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Контакты */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-phone"></i> Контакты</h2>
                        <p className={styles.infoText}><strong>Телефон:</strong> {contacts.phone}</p>
                        <p className={styles.infoText}><strong>Email:</strong> <a href={`mailto:${contacts.email}`} className={styles.link}>{contacts.email}</a></p>
                        <p className={styles.infoText}><strong>Instagram:</strong> <a href={contacts.social} target="_blank" rel="noopener noreferrer" className={styles.link}>{contacts.social}</a></p>
                    </div>

                    {/* Галерея */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-images"></i> Галерея</h2>
                        <div className={styles.galleryGrid}>
                            {gallery.map((img, index) => (
                                <img key={index} src={img} alt={`Фото ${index + 1}`} className={styles.galleryImage} />
                            ))}
                        </div>
                    </div>

                    {/* Бронирование */}
                    <div className={styles.bookingArea}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-calendar-check"></i> Бронирование</h2>
                        {Rest.booking()}
                    </div>

                    {/* Подписка */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}><i className="fas fa-envelope"></i> Подписка на новости</h2>
                        <p className={styles.infoText}>Подпишитесь, чтобы получать обновления о меню и акциях!</p>
                        <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                            <input type="email" name="email" placeholder="Ваш email" required className={styles.subscribeInput} />
                            <button type="submit" className={styles.subscribeButton}>Подписаться</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}