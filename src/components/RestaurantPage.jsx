// RestaurantPage.js - Полный код с новой структурой
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurant } from './AllPlace';
import { SubscribeContext } from './SubscribeContext';
import styles from './RestaurantPage.module.css';

// Иконки Font Awesome
export default function RestaurantPage() {
    
    const { id } = useParams();
    const Rest = restaurant.find(item => item.id == id);
    let { sub, unsubscribe, subscribe } = useContext(SubscribeContext)
    let isSub = !!sub[id] 
    const SubsComponent = () => (
        <button className={styles.bookingButton} onClick={()=> (isSub ? unsubscribe(id) : subscribe(id,Rest.name))}>{isSub ? 'Отписаться':'Подписатсья'} </button>
    );
    const BookingComponent = () => (
        <Link to={`/booking/${Rest.id}`}>
            <button className={styles.bookingButton} > Бронировать </button>
        </Link>
    );
    

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
        {/* Верхняя навигация */}
        <header className={styles.header}>
            <Link to="/" className={styles.back}>← К списку ресторанов</Link>
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
                            <div>
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

            {/* Блок подписки */}
            <div className={styles.subscribeBox}>
                <h2 style={{margin: 0, fontSize: '20px'}}>Узнавайте о событиях первым</h2>
                <form onSubmit={handleSubscribe}>
                    <input className={styles.subscribeInput} type="email" name="email" placeholder="Ваш email" />
                    <button className={styles.bookingButton} type="submit">OK</button>
                </form>
            </div>
        </div>
    </div>
);
}