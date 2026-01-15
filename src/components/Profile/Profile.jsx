import { useContext, useEffect, useMemo } from 'react';
import { useParams, Link } from "react-router-dom";
import { Profiles } from '../AllData/AllProfile';
import { SubscribeContext } from '../AllData/SubscribeContext';
import styles from './Profile.module.css';

export default function Profile() {
    const { id } = useParams();
    const { 
        Booking, 
        deleteBooking, 
        sub, 
        unsubscribe, 
        BookingHotel, 
        deleteBookingHotel, 
        Flower, 
        deleteFlower 
    } = useContext(SubscribeContext);

    const profile = useMemo(() => 
        Profiles.find(p => p.id === Number(id)), 
        [id]
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!profile) {
        return <div className={styles.profileContainer}>Профиль не найден.</div>;
    }

    // Вспомогательный компонент для пустых секций
    const EmptyState = ({ message }) => (
        <p className={styles.emptyText}>{message}</p>
    );

    return (
        <div className={styles.profileContainer}>
            <div className={styles.contentWrapper}>
                <Link to="/" className={styles.backButton}>← На главную</Link>

                <header className={styles.profileHeader}>
                    <div className={styles.headerContent}>
                        <img src={profile.avatar} alt={profile.name} className={styles.avatar} />
                        <h1 className={styles.name}>{profile.name}</h1>
                        <p className={styles.description}>{profile.des}</p>
                    </div>
                </header>

                {/* Секция: Брони ресторанов */}
                <section className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Мои Брони</h2>
                    <div className={styles.itemList}>
                        {Object.keys(Booking).length > 0 ? (
                            Object.entries(Booking).map(([bookId, info]) => (
                                <div key={bookId} className={styles.bookingCard}>
                                    <h3>{info.name}</h3>
                                    <p><strong>Персон:</strong> {info.person}</p>
                                    <p><strong>Дата:</strong> {info.datetime}</p>
                                    {info.wish && <p className={styles.wishText}>“{info.wish}”</p>}
                                    <button className={styles.deleteBtn} onClick={() => deleteBooking(bookId)}>
                                        Удалить Бронь
                                    </button>
                                </div>
                            ))
                        ) : <EmptyState message="У вас пока нет активных броней в ресторанах" />}
                    </div>
                </section>

                {/* Секция: Подписки */}
                <section className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Мои Подписки</h2>
                    <div className={styles.itemList}>
                        {Object.keys(sub).length > 0 ? (
                            Object.entries(sub).map(([subId, item]) => (
                                <div key={subId} className={`${styles.bookingCard} ${styles.subRow}`}>
                                    <h3 style={{ margin: 0 }}>{item.name}</h3>
                                    <button 
                                        className={styles.actionButton} 
                                        style={{ fontSize: '12px', padding: '6px 12px' }}
                                        onClick={() => unsubscribe(subId)}
                                    >
                                        Отписаться
                                    </button>
                                </div>
                            ))
                        ) : <EmptyState message="Вы еще ни на что не подписаны" />}
                    </div>
                </section>

                {/* Секция: Отели */}
                <section className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Бронирование отелей</h2>
                    <div className={styles.itemList}>
                        {Object.keys(BookingHotel).length > 0 ? (
                            Object.entries(BookingHotel).map(([hotelId, info]) => (
                                <div key={hotelId} className={styles.bookingCard}>
                                    <div className={styles.orderHeader}>
                                        <div className={styles.orderImageWrapper}>
                                            <img src={info.img} alt={info.name} className={styles.orderImage} />
                                        </div>
                                        <div className={styles.orderDetails}>
                                            <h3 className={styles.flowerName}>{info.name}</h3>
                                            <p className={styles.priceText}>{info.price} ₸</p>
                                            <p className={styles.quantityText}>{info.guests} чел.</p>
                                        </div>
                                    </div>
                                    <div className={styles.dateBadge}>
                                        <span>📅 Период:</span>
                                        <strong>{info.checkin} — {info.exit}</strong>
                                    </div>
                                    <button className={styles.deleteBtn} onClick={() => deleteBookingHotel(hotelId)}>
                                        Отменить бронирование
                                    </button>
                                </div>
                            ))
                        ) : <EmptyState message="История бронирования отелей пуста" />}
                    </div>
                </section>

                {/* Секция: Цветы */}
                {/* Секция: Цветы */}
                <section className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Заказы цветов</h2>
                    <div className={styles.itemList}>
                        {Object.keys(Flower).length > 0 ? (
                            Object.entries(Flower).map(([flowerId, item]) => (
                                <div key={flowerId} className={styles.bookingCard}>
                                    <div className={styles.orderHeader}>
                                        {/* Проверка: если есть imgflower ИЛИ imgf, показываем обертку с фото */}
                                        {(item.imgflower || item.imgf) && (
                                            <div className={styles.orderImageWrapper}>
                                                <img 
                                                    src={item.imgflower || item.imgf} 
                                                    alt={item.name} 
                                                    className={styles.orderImage} 
                                                />
                                            </div>
                                        )}
                                        
                                        <div className={styles.orderDetails}>
                                            <h3 className={styles.flowerName}>{item.name}</h3>
                                            <p className={styles.priceText}>{item.price} ₸</p>
                                            <p className={styles.quantityText}>{item.quantity} шт.</p>
                                        </div>
                                    </div>
                                    <p className={styles.addressLine}>📍 {item.address}</p>
                                    <button className={styles.deleteBtn} onClick={() => deleteFlower(flowerId)}>
                                        Отменить заказ
                                    </button>
                                </div>
                            ))
                        ) : <EmptyState message="Вы еще не заказывали цветы" />}
                    </div>
                </section>
            </div>
        </div>
    );
}