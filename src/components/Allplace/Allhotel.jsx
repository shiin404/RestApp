import { hotel } from '../AllData/AllPlace'; // Используем массив hotel
import { Link } from "react-router-dom";
import styles from './Allplace.module.css';
import { useEffect } from "react";

export default function Allhotel() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.pageLayout}>
            <div className={styles.mainContainer}>
                <section className={styles.section}>
                    <h2 className={styles.title}>Все гостиницы</h2>
                    <div className={styles.restaurantGrid}>
                        {hotel.map((element) => (
                            <Link key={element.id} to={`/hotel/${element.id}`} className={styles.cardLink}>
                                <div className={styles.restaurantCard}>
                                    <div className={styles.imageBox}>
                                        <img src={element.imghotel} alt={element.name} />
                                        {/* Цена за ночь или категория */}
                                    </div>
                                    
                                    <div className={styles.content}>
                                        <h3 className={styles.name}>{element.name}</h3>
                                        <p className={styles.description}>{element.des}</p>
                                        
                                        <div className={styles.priceWrapper}>
                                            <span className={styles.priceLabel}>Одна ночь</span>
                                            <span className={styles.priceValue}>{element.cheque}</span>
                                        </div>
                                        
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