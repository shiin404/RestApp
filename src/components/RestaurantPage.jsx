// RestaurantPage.js - Полный код с рабочими изображениями
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurant } from './AllPlace';
import { SubscribeContext } from './SubscribeContext';
import styles from './RestaurantPage.module.css';

export default function RestaurantPage() {
    
    const { id } = useParams();
    const Rest = restaurant.find(item => item.id == id);
    let { sub, unsubscribe, subscribe } = useContext(SubscribeContext)
    let isSub = !!sub[id] 

    const SubsComponent = () => (
        <button className={styles.bookingButton} onClick={()=> (isSub ? unsubscribe(id) : subscribe(id,Rest.name))}>
            {isSub ? 'Отписаться' : 'Подписаться'} 
        </button>
    );

    const BookingComponent = () => (
        <Link to={`/booking/${Rest.id}`}>
            <button className={styles.bookingButton}> Бронировать </button>
        </Link>
    );

    if (!Rest) return <h1 className={styles.notfound}>Ресторан не найден</h1>;

    // --- ОБНОВЛЕННЫЕ ДАННЫЕ (Ссылки на реальные фото) ---
    const menu = Rest.menu || [
        { img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80', name: 'Тартар из говядины', desc: 'Классика, с каперсами и трюфельным маслом.', price: '7500 ₸' },
        { img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80', name: 'Черная Треска', desc: 'Приготовлена на пару с соусом понзу и свежей зеленью.', price: '5500 ₸' },
        { img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80', name: 'Шоколадный Фондан', desc: 'Теплый десерт с жидким центром и мороженым.', price: '4050 ₸' },
    ];

    const gallery = Rest.gallery || [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
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
    const description = Rest.des || "«Монолит» — это пространство, где встречаются современный дизайн и авторская кухня. Мы предлагаем уникальный гастрономический опыт в атмосфере строгой роскоши и минимализма.";
    // --- Конец данных ---

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
            <Link to="/restaurants" className={styles.back}>← Назад</Link>
            <div style={{fontSize: '18px', fontWeight: 'bold'}}>RestApp</div>
        </header>

        <div className={styles.content}>
            
            {/* Блок с изображением */}
            <div className={styles.imageWrapper}>
                <img src={Rest.imgrest} alt={Rest.name} className={styles.image} />
            </div>

            {/* Заголовок и кнопки управления */}
            <div className={styles.infoHead}>
                <div>
                    <h1 className={styles.title}>{Rest.name}</h1>
                    <div className={styles.ratingInfo}>
                        {renderStars(rating)} <span className={styles.ratingText}>{rating}</span>
                    </div>
                </div>
                <div className={styles.actions}>
                    <BookingComponent />
                    <SubsComponent />
                </div>
            </div>

            <div className={styles.mainGrid}>
                {/* Левая колонка */}
                <div>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>О концепции</h2>
                        <p className={styles.description}>{description}</p>
                    </div>

                    <div className={styles.section} style={{marginTop: '40px'}}>
                        <h2 className={styles.sectionTitle}>Контакты</h2>
                        <p className={styles.infoText}>{address}</p>
                        <p className={styles.infoText}>{contacts.phone}</p>
                    </div>
                </div>

                {/* Правая колонка - Меню */}
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
            </div>

            {/* Нижняя часть - Галерея и Отзывы */}
            <div className={styles.mainGrid}>
                <div>
                    <h2 className={styles.sectionTitle}>Галерея</h2>
                    <div className={styles.galleryGrid}>
                        {gallery.map((img, index) => (
                            <img key={index} src={img} className={styles.galleryImage} alt="rest" />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className={styles.sectionTitle}>Последние отзывы</h2>
                    {reviews.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <div className={styles.reviewName}>{review.name}</div>
                            <p className={styles.reviewText}>{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
}