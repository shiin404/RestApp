import { useEffect, useContext, useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { restaurant } from '../AllData/AllPlace';
import { SubscribeContext } from '../AllData/SubscribeContext';
import styles from './BookingPage.module.css';

export default function BookingPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { Booking, AddBooking, deleteBooking } = useContext(SubscribeContext);

    const currentRestaurant = useMemo(() => 
        restaurant.find((item) => item.id === Number(id)), 
        [id]
    );

    const [guestCount, setGuestCount] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');

    const isAlreadyBooked = !!Booking[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackClick = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    const handleConfirmBooking = () => {
        if (!guestCount || !dateTime) {
            alert("Пожалуйста, заполните количество гостей и время");
            return;
        }
        AddBooking(id, currentRestaurant?.name, guestCount, dateTime, specialRequests);
    };

    if (!currentRestaurant) return <div className={styles.error}>Ресторан не найден</div>;

    return (
        <div className={styles.pageWrapper}>
            <main className={styles.main}>
                <a 
                    href="#" 
                    onClick={handleBackClick} 
                    className={styles.backLink}
                >
                    ← Назад к списку
                </a>
                
                <h1 className={styles.title}>{currentRestaurant.name}</h1>
                <p className={styles.subtitle}>Заполните данные для бронирования столика</p>

                <div className={styles.bookingCard}>
                    <div className={styles.field}>
                        <label className={styles.label}>На сколько человек?</label>
                        <input 
                            className={styles.input}
                            type="number" 
                            placeholder="Количество персон"
                            value={guestCount}
                            onChange={(e) => setGuestCount(e.target.value)} 
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Дата и время</label>
                        <input 
                            className={styles.input}
                            type="text" 
                            placeholder="Например: 20 мая, 19:30"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)} 
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Ваши пожелания</label>
                        <input 
                            className={styles.input}
                            type="text" 
                            placeholder="Тихий столик, аллергия и т.д."
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)} 
                        />
                    </div>

                    {!isAlreadyBooked ? (
                        <button 
                            className={`${styles.actionBtn} ${styles.confirm}`}
                            onClick={handleConfirmBooking}
                        >
                            Забронировать сейчас
                        </button>
                    ) : (
                        <div className={styles.bookedContainer}>
                            <div className={styles.successMessage}>
                                ✓ У вас есть активная бронь
                            </div>
                            <button 
                                className={`${styles.actionBtn} ${styles.cancel}`}
                                onClick={() => deleteBooking(id)}
                            >
                                Отменить бронирование
                            </button>
                        </div>
                    )}
                </div>

                <div className={styles.footerInfo}>
                    Нажимая кнопку, вы соглашаетесь с правилами посещения заведения.
                </div>
            </main>
        </div>
    );
}