import { Profiles } from './AllProfile'
import { useParams, Link } from "react-router-dom";
import styles from './Profile.module.css' // убедись, что имя файла совпадает
import { SubscribeContext } from './SubscribeContext';
import { useContext } from 'react';

function Profile() {
    let { id } = useParams()
    let ProfilePerson = Profiles.find(element => element.id == id)

    const subs = useContext(SubscribeContext)

    if (!ProfilePerson) {
        return <div className={styles.profileContainer}>Профиль не найден.</div>
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.contentWrapper}>

                <Link to="/" className={styles.backButton}>
                    ← На главную 
                </Link>

                <div className={styles.profileHeader}>
                    <div className={styles.headerContent}>
                        <img
                            src={ProfilePerson.avatar}
                            alt={ProfilePerson.name}
                            className={styles.avatar}
                        />
                        <h1 className={styles.name}>{ProfilePerson.name}</h1>
                        <p className={styles.description}>{ProfilePerson.des}</p>

                        {/* <div className={styles.actionsSection}>
                            <Link to={`/edit/${id}`} className={styles.actionButton}>
                                Редактировать
                            </Link>
                            <button className={styles.actionButton}>
                                Настройки
                            </button>
                        </div> */}
                    </div>
                </div>

                <div className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Мои Брони</h2>
                    <div className={styles.itemList}>
                        {Object.entries(subs.Booking).map(([bookId, info]) => (
                            <div key={bookId} className={styles.bookingCard}>
                                <h3>{info.name}</h3>
                                <p><strong>Персон:</strong> {info.person}</p>
                                <p><strong>Дата:</strong> {info.datetime}</p>
                                {info.wish && <p className={styles.wishText}>“{info.wish}”</p>}
                                <button 
                                    className={styles.deleteBtn} 
                                    onClick={() => subs.deleteBooking(bookId)}
                                >
                                    Удалить Бронь
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Мои Подписки</h2>
                    <div className={styles.itemList}>
                        {Object.entries(subs.sub).map(([subId, restaurant]) => (
                            <div key={subId} className={styles.bookingCard} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <h3 style={{margin: 0}}>{restaurant.name}</h3>
                                <button 
                                    className={styles.actionButton} 
                                    style={{fontSize: '12px', padding: '6px 12px'}}
                                    onClick={() => subs.unsubscribe(subId)}
                                >
                                    Отписаться
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Секция: Бронирование отелей */}
                <div className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Бронирование отелей</h2>
                    <div className={styles.itemList}>
                        {Object.entries(subs.BookingHotel).map(([hotelId, info]) => (
                            <div key={hotelId} className={styles.bookingCard}>
                                <div className={styles.orderHeader}>
                                    {/* Миниатюра отеля */}
                                    <div className={styles.orderImageWrapper}>
                                        <img 
                                            src={info.img} 
                                            alt={info.name} 
                                            className={styles.orderImage} 
                                        />
                                    </div>
                                    
                                    <div className={styles.orderDetails}>
                                        <h3 className={styles.flowerName}>{info.name}</h3>
                                        <p className={styles.priceText}>{info.price} ₸</p>
                                        <p className={styles.quantityText}>{info.guests} чел.</p>
                                    </div>
                                </div>

                                {/* Блок с датами заезда и выезда */}
                                <div className={styles.dateBadge}>
                                    <span className={styles.dateLabel}>📅 Период:</span>
                                    <span className={styles.dateValue}>{info.checkin} — {info.exit}</span>
                                </div>

                                <button 
                                    className={styles.deleteBtn} 
                                    onClick={() => subs.deleteBookingHotel(hotelId)}
                                >
                                    Отменить бронирование
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Заказы цветов</h2>
                    <div className={styles.itemList}>
                        {Object.entries(subs.Flower).map(([flowerId, flower]) => (
                            <div key={flowerId} className={styles.bookingCard}>
                                <div className={styles.orderHeader}>
                                    {/* Контейнер для фото */}
                                    <div className={styles.orderImageWrapper}>
                                        <img 
                                            src={flower.imgflower || flower.imgf} 
                                            alt={flower.name} 
                                            className={styles.orderImage} 
                                        />
                                    </div>
                                    
                                    <div className={styles.orderDetails}>
                                        <h3 className={styles.flowerName}>{flower.name}</h3>
                                        <p className={styles.priceText}>{flower.price} ₸</p>
                                        <p className={styles.quantityText}>{flower.quantity} шт.</p>
                                    </div>
                                </div>

                                <p className={styles.addressLine}>
                                    📍 {flower.address}
                                </p>

                                <button 
                                    className={styles.deleteBtn} 
                                    onClick={() => subs.deleteFlower(flowerId)}
                                >
                                    Отменить заказ
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile