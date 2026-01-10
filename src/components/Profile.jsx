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

                        <div className={styles.actionsSection}>
                            <Link to={`/edit/${id}`} className={styles.actionButton}>
                                Редактировать
                            </Link>
                            <button className={styles.actionButton}>
                                Настройки
                            </button>
                        </div>
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

                <div className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>Заказы цветов</h2>
                    <div className={styles.itemList}>
                        {Object.entries(subs.Flower).map(([flowerId, flower]) => (
                            <div key={flowerId} className={styles.bookingCard}>
                                <div className={styles.itemInfo}>
                                    <h3>{flower.name}</h3>
                                    <p><strong>Сумма:</strong> {flower.price} ₽</p>
                                    <p><strong>Кол-во:</strong> {flower.quantity} шт.</p>
                                    <p className={styles.wishText} style={{borderTop: '1px solid #161616', marginTop: '10px', paddingTop: '10px'}}>
                                        📍 {flower.address}
                                    </p>
                                </div>
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