import styles from './BookHotel.module.css';
import { useState, useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { hotel } from './AllPlace';
import { SubscribeContext } from './SubscribeContext';

export default function BookHotel() {
    const { id } = useParams();
    const navigate = useNavigate();
    const Hotel = hotel.find((el) => el.id == id);
    
    // Достаем функцию из контекста
    const { AddBookingHotel } = useContext(SubscribeContext);

    // Константа цены за одну ночь
    const PRICE_PER_NIGHT = 15000;

    // Состояния формы
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    // Автоматический расчет итоговой цены при изменении дат
    useEffect(() => {
        if (checkIn && checkOut) {
            const start = new Date(checkIn);
            const end = new Date(checkOut);
            
            // Вычисляем разницу в днях
            const diffTime = end - start;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays > 0) {
                setTotalPrice(diffDays * PRICE_PER_NIGHT);
            } else {
                setTotalPrice(0);
            }
        }
    }, [checkIn, checkOut]);

    if (!Hotel) return <div className={styles.notfound}>Отель не найден</div>;

    const handleConfirmBooking = () => {
        // Проверка: все ли поля заполнены
        if (!checkIn || !checkOut || !guests) {
            alert("Пожалуйста, заполните все поля даты и выберите количество гостей!");
            return;
        }

        // Проверка: дата выезда должна быть позже даты заезда
        if (totalPrice <= 0) {
            alert("Дата выезда должна быть позже даты заезда");
            return;
        }

        // Отправка данных в контекст (по твоей структуре)
        // id, name, chekin, exit, number (гости), quantity (цена), img
        AddBookingHotel(
            Hotel.id, 
            Hotel.name, 
            checkIn, 
            checkOut, 
            guests, 
            totalPrice, 
            Hotel.imghotel
        );

        alert("Отель успешно забронирован!");
        navigate('/profile/1'); // Переход в профиль
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to="/" className={styles.logo}>RestApp</Link>
                <Link to={`/hotel/${id}`} className={styles.closeBtn}>✕</Link>
            </header>

            <div className={styles.card}>
                <div className={styles.hotelPreview}>
                    <img src={Hotel.imghotel} alt={Hotel.name} className={styles.image} />
                    <div className={styles.hotelInfo}>
                        <h1 className={styles.hotelName}>{Hotel.name}</h1>
                        <p className={styles.hotelPrice}>{PRICE_PER_NIGHT} ₸ / ночь</p>
                    </div>
                </div>

                <div className={styles.bookingForm}>
                    <div className={styles.inputRow}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Дата заезда</label>
                            <input 
                                type="date" 
                                className={styles.input}
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Дата выезда</label>
                            <input 
                                type="date" 
                                className={styles.input}
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Количество гостей</label>
                        <select 
                            className={styles.input}
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                        >
                            <option value="1">1 гость</option>
                            <option value="2">2 гостя</option>
                            <option value="3">3 гостя</option>
                            <option value="4">4 гостя</option>
                        </select>
                    </div>

                    <div className={styles.priceDisplay}>
                        <div className={styles.priceRow}>
                            <span>Итого к оплате:</span>
                            <span className={styles.amount}>{totalPrice} ₸</span>
                        </div>
                    </div>

                    <button 
                        className={styles.buyButton} 
                        onClick={handleConfirmBooking}
                    >
                        Забронировать сейчас
                    </button>
                </div>

                <Link to={`/hotel/${id}`} className={styles.backLink}>
                    ← Вернуться к описанию
                </Link>
            </div>
        </div>
    );
}