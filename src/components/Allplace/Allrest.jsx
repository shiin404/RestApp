import { restaurant } from '../AllData/AllPlace';
import { Link } from "react-router-dom";
import styles from './Allplace.module.css';
import { useEffect } from "react";

export default function Allrest() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.pageLayout}>
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
                                        <span className={styles.more}>Забронировать →</span>
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