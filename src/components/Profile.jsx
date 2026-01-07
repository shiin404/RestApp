import {Profiles} from './AllProfile'
import { useParams, Link } from "react-router-dom";
import styles from './Profile.module.css' 
// Используем 'Link' для навигации

function Profile() {
  let {id} = useParams()
  let ProfilePerson = Profiles.find(element => element.id == id)
  
  if (!ProfilePerson) {
      return <div className={styles.profileContainer}>Профиль не найден.</div>
  }

  // Заглушки для данных
  const bookings = [
      { id: 1, restaurant: "Уютный Уголок", date: "2025-12-20, 19:00" },
      { id: 2, restaurant: "Гриль-Мастер", date: "2025-12-25, 20:30" },
  ];
  const subscriptions = [
      { id: 1, name: "Ресторан 'Гурман'", status: "Активна" },
      { id: 2, name: "Блог о еде", status: "Активна" },
  ];

  return(
    <div className={styles.profileContainer}>
        <div className={styles.contentWrapper}>
            
            {/* 1. Шапка Профиля (с кнопкой "Назад") */}
            <div className={styles.profileHeader}>
                
                {/* КНОПКА НАЗАД */}
                <Link to="/" className={styles.backButton}>
                    ← На главную
                </Link>
                
                {/* Содержимое шапки, центрированное */}
                <div className={styles.headerContent}>
                    <img 
                        src={ProfilePerson.avatar} 
                        alt={`Аватар пользователя ${ProfilePerson.name}`} 
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

            {/* 2. Секция: Мои Бронирования */}
            <div className={styles.infoSection}>
                <h2 className={styles.sectionTitle}>Мои Бронирования</h2>
                <ul className={styles.itemList}>
                    {bookings.length > 0 ? (
                        bookings.map(booking => (
                            <li key={booking.id} className={styles.item}>
                                <span>{booking.restaurant}</span>
                                <span>{booking.date}</span>
                            </li>
                        ))
                    ) : (
                        <li className={styles.noItems}>Активных бронирований нет.</li>
                    )}
                </ul>
            </div>

            {/* 3. Секция: Мои Подписки */}
            <div className={styles.infoSection}>
                <h2 className={styles.sectionTitle}>Мои Подписки</h2>
                <ul className={styles.itemList}>
                    {subscriptions.length > 0 ? (
                        subscriptions.map(sub => (
                            <li key={sub.id} className={styles.item}>
                                <span>{sub.name}</span>
                                <span>{sub.status}</span>
                            </li>
                        ))
                    ) : (
                        <li className={styles.noItems}>Вы пока ни на что не подписаны.</li>
                    )}
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Profile