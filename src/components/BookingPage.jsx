import { useParams, useNavigate,Link } from "react-router-dom";
import { useContext, useState } from "react";
import { restaurant } from './AllPlace';
import { SubscribeContext } from './SubscribeContext';
import styles from './BookingPage.module.css';

export default function BookingPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const Rest = restaurant.find((element) => (element.id == id));
    
    const { Booking, AddBooking, deleteBooking } = useContext(SubscribeContext);
    
    const [localwish, Setlocalwish] = useState('');
    const [localperson, Setlocalperson] = useState('');
    const [localdatatime, Setlocaldatatime] = useState('');

    const isBooked = Booking[id];

    return (
        <div className={styles.pageWrapper}>
            {/* Шапка как на скриншоте */}
            <header className={styles.header}>
                <div className={styles.logo}>RestApp</div>
                <Link to = '/profile/1'>
                    <button className={styles.profileBtn}>Profile</button>
                </Link>
                
            </header>

            <main className={styles.main}>
                <a href="#" onClick={() => navigate(-1)} className={styles.backLink}>← Назад к списку</a>
                
                <h1 className={styles.title}>{Rest?.name || "Ресторан"}</h1>
                <p className={styles.subtitle}>Заполните данные для бронирования столика</p>

                <div className={styles.bookingCard}>
                    <div className={styles.field}>
                        <label className={styles.label}>На сколько человек?</label>
                        <input 
                            className={styles.input}
                            type="number" 
                            placeholder="Количество персон"
                            value={localperson}
                            onChange={(e) => Setlocalperson(e.target.value)} 
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Дата и время</label>
                        <input 
                            className={styles.input}
                            type="text" 
                            placeholder="Например: 20 мая, 19:30"
                            value={localdatatime}
                            onChange={(e) => Setlocaldatatime(e.target.value)} 
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Ваши пожелания</label>
                        <input 
                            className={styles.input}
                            type="text" 
                            placeholder="Тихий столик, аллергия и т.д."
                            value={localwish}
                            onChange={(e) => Setlocalwish(e.target.value)} 
                        />
                    </div>

                    {!isBooked ? (
                        <button 
                            className={`${styles.actionBtn} ${styles.confirm}`}
                            onClick={() => AddBooking(id, Rest.name, localperson, localdatatime, localwish)}
                        >
                            Забронировать сейчас
                        </button>
                    ) : (
                        <>
                            <div style={{textAlign: 'center', color: '#4caf50', marginBottom: '15px'}}>
                                ✓ У вас есть активная бронь
                            </div>
                            <button 
                                className={`${styles.actionBtn} ${styles.cancel}`}
                                onClick={() => deleteBooking(id)}
                            >
                                Отменить бронирование
                            </button>
                        </>
                    )}
                </div>

                <div className={styles.footerInfo}>
                    Нажимая кнопку, вы соглашаетесь с правилами посещения заведения.
                </div>
            </main>
        </div>
    );
}