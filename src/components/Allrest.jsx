import Header from "./Header";
import { restaurant } from './AllPlace';
import { Link } from "react-router-dom";
import styles from './Allrest.module.css';

export default function Allrest() {
    return (
        <div className={styles.pageLayout}>
            <Header />
            <div className={styles.mainContainer}>
                <section className={styles.section}>
                    <h2 className={styles.title}>Все рестораны</h2>
                    <div className={styles.restaurantGrid}>
                        {restaurant.map((element) => (
                            <Link key={element.id} to={`/restaurant/${element.id}`} className={styles.cardLink}>
                                <div className={styles.restaurantCard}>
                                    <div className={styles.imageBox}>
                                        <img src={element.imgrest} alt={element.name} />
                                        {/* Небольшой бейдж сверху, если нужно оставить чек акцентом */}
                                        <div className={styles.badge}>{element.cheque}</div>
                                    </div>
                                    <div className={styles.content}>
                                        <h3 className={styles.name}>{element.name}</h3>
                                        <p className={styles.description}>{element.des}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}