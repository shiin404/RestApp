import styles from './Bookhotel.module.css';
import { useState, useContext, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { hotel } from '../AllData/AllPlace';
import { SubscribeContext } from '../AllData/SubscribeContext';

const PRICE_PER_NIGHT = 15000;
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

export default function BookHotel() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { AddBookingHotel } = useContext(SubscribeContext);

    const targetHotel = useMemo(() => hotel.find((item) => item.id === Number(id)), [id]);

    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [guestsCount, setGuestsCount] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const totalPrice = useMemo(() => {
        if (!checkInDate || !checkOutDate) return 0;

        const start = new Date(checkInDate);
        const end = new Date(checkOutDate);
        const differenceInDays = Math.ceil((end - start) / MILLISECONDS_IN_DAY);

        return differenceInDays > 0 ? differenceInDays * PRICE_PER_NIGHT : 0;
    }, [checkInDate, checkOutDate]);

    const handleBookingSubmission = () => {
        if (!checkInDate || !checkOutDate || !guestsCount) {
            alert("Пожалуйста, заполните все поля даты и выберите количество гостей!");
            return;
        }

        if (totalPrice <= 0) {
            alert("Дата выезда должна быть позже даты заезда");
            return;
        }

        AddBookingHotel(
            targetHotel.id,
            targetHotel.name,
            checkInDate,
            checkOutDate,
            guestsCount,
            totalPrice,
            targetHotel.imghotel
        );

        alert("Отель успешно забронирован!");
        navigate('/profile/1');
    };

    if (!targetHotel) {
        return <div className={styles.notfound}>Отель не найден</div>;
    }

    return (
        <div className={styles.container}>

            <div className={styles.card}>
                <div className={styles.hotelPreview}>
                    <img src={targetHotel.imghotel} alt={targetHotel.name} className={styles.image} />
                    <div className={styles.hotelInfo}>
                        <h1 className={styles.hotelName}>{targetHotel.name}</h1>
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
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Дата выезда</label>
                            <input 
                                type="date" 
                                className={styles.input}
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Количество гостей</label>
                        <select 
                            className={styles.input}
                            value={guestsCount}
                            onChange={(e) => setGuestsCount(Number(e.target.value))}
                        >
                            {[1, 2, 3, 4].map(num => (
                                <option key={num} value={num}>
                                    {num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.priceDisplay}>
                        <div className={styles.priceRow}>
                            <span>Итого к оплате:</span>
                            <span className={styles.amount}>{totalPrice.toLocaleString()} ₸</span>
                        </div>
                    </div>

                    <button 
                        className={styles.buyButton} 
                        onClick={handleBookingSubmission}
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