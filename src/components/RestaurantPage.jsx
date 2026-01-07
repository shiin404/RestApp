// RestaurantPage.js - Полный код с новой структурой
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurant } from './AllPlace';
import { SubscribeContext } from './SubscribeContext';
import styles from './RestaurantPage.module.css';

// Иконки Font Awesome
export default function RestaurantPage() {
    const { id } = useParams();
    let { sub, unsubscribe, subscribe } = useContext(SubscribeContext)
    let isSub = sub[id] || false
    const BookingComponent = () => (
        <button className={styles.bookingButton} onClick={()=> (isSub ? unsubscribe(id) : subscribe(id))}>{isSub ? 'Отписаться':'Подписатсья'} </button>
    );
    
    const Rest = restaurant.find(item => item.id == id);

    if (!Rest) return <h1 className={styles.notfound}>Ресторан не найден</h1>;

    // --- Плейсхолдеры ---
    const menu = Rest.menu || [
        { img: 'https://via.placeholder.com/200x200/000000/FFFFFF?text=Dish+1', name: 'Тартар из говядины', desc: 'Классика, с каперсами и трюфельным маслом.', price: '750 ₽' },
        { img: 'https://via.placeholder.com/200x200/000000/FFFFFF?text=Dish+2', name: 'Черная Треска', desc: 'Приготовлена на пару с соусом понзу и свежей зеленью.', price: '1400 ₽' },
        { img: 'https://via.placeholder.com/200x200/000000/FFFFFF?text=Dish+3', name: 'Шоколадный Фондан', desc: 'Теплый десерт с жидким центром и мороженым.', price: '450 ₽' },
    ];
    const address = Rest.address || 'ул. Монолитная, 7, Премиум-Локация';
    const schedule = Rest.schedule || [
        { day: 'Понедельник - Пятница', time: '12:00 – 23:00' },
        { day: 'Суббота - Воскресенье', time: '12:00 – 01:00' },
    ];
    const rating = Rest.rating || 4.8;
    const reviews = Rest.reviews || [
        { name: 'Екатерина В.', text: 'Безупречное обслуживание и фантастическое меню. Идеальный выбор для особого случая.' },
        { name: 'Игорь А.', text: 'Самая стильная подача блюд в городе. Черная Треска — обязательна к заказу.' },
    ];
    const contacts = Rest.contacts || {
        phone: '+7 (495) 123-45-67',
        email: 'reservations@monolith.com',
    };
    const gallery = Rest.gallery || [
        'https://via.placeholder.com/300x200/000000/FFFFFF?text=Hall',
        'https://via.placeholder.com/300x200/000000/FFFFFF?text=Kitchen',
        'https://via.placeholder.com/300x200/000000/FFFFFF?text=Bar',
    ];
    const description = Rest.des || "«Монолит» — это пространство, где встречаются современный дизайн и авторская кухня. Мы предлагаем уникальный гастрономический опыт в атмосфере строгой роскоши и минимализма.";
    // --- Конец Плейсхолдеров ---

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? styles.starFilled : styles.starEmpty}>★</span>
            );
        }
        return stars;
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        alert(`Спасибо за подписку! Email: ${email}`);
        e.target.reset();
    };

    return (
        <div className={styles.container}>
            
            {/* 1. Блок Героя (Обложка + Кнопка) */}
            <div className={styles.hero}>
                <img src={Rest.imgrest} alt={Rest.name} className={styles.image} />
                <div className={styles.top}>
                    <Link to="/" className={styles.back}>← Назад</Link>
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{Rest.name}</h1>
                    <div className={styles.ratingInfo}>
                        {renderStars(rating)} <span className={styles.ratingText}>{rating}</span>
                    </div>
                    <div className={styles.bookingArea}>
                         <BookingComponent />
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                
                {/* 2. Основная Информация и Меню */}
                <div className={styles.mainGrid}>
                    
                    {/* Колонка 1: Описание и Адрес */}
                    <div className={styles.mainColumn}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>КОНЦЕПЦИЯ</h2>
                            <p className={styles.description}>{description}</p>
                        </div>
                        
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>АДРЕС</h2>
                            <p className={styles.infoText}><i className="fas fa-map-marker-alt"></i> {address}</p>
                            <a href={`tel:${contacts.phone}`} className={styles.infoTextLink}>
                                <i className="fas fa-phone"></i> {contacts.phone}
                            </a>
                        </div>
                        
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>ГРАФИК РАБОТЫ</h2>
                            <details className={styles.scheduleDetails}>
                                <summary>Показать расписание</summary>
                                <ul className={styles.scheduleList}>
                                    {schedule.map((item, index) => (
                                        <li key={index} className={styles.scheduleItem}>
                                            <span>{item.day}</span> <span>{item.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </div>
                    </div>

                    {/* Колонка 2: Меню */}
                    <div className={styles.menuColumn}>
                        <h2 className={styles.sectionTitle}>АВТОРСКОЕ МЕНЮ</h2>
                        <div className={styles.menuGrid}>
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
                    </div>
                </div>
                
                {/* 3. Галерея и Отзывы */}
                <div className={styles.secondaryGrid}>
                    
                    <div className={styles.galleryContainer}>
                        <h2 className={styles.sectionTitle}>ГАЛЕРЕЯ</h2>
                        <div className={styles.galleryGrid}>
                            {gallery.map((img, index) => (
                                <img key={index} src={img} alt={`Фото ${index + 1}`} className={styles.galleryImage} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.reviewsContainer}>
                        <h2 className={styles.sectionTitle}>ОТЗЫВЫ</h2>
                        <div className={styles.reviewsList}>
                            {reviews.map((review, index) => (
                                <div key={index} className={styles.reviewCard}>
                                    <h4 className={styles.reviewName}>{review.name}</h4>
                                    <p className={styles.reviewText}>{review.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* 4. Подписка */}
                <div className={styles.subscribeContainer}>
                    <h2 className={styles.sectionTitle}>ПОДПИСКА НА НОВОСТИ</h2>
                    <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                        <input type="email" name="email" placeholder="Email для эксклюзивных предложений" required className={styles.subscribeInput} />
                        <button type="submit" className={styles.subscribeButton}>Подписаться</button>
                    </form>
                </div>

            </div>
        </div>
    );
}