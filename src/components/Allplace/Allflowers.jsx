import { flower } from '../AllData/AllPlace'; 
import { Link } from "react-router-dom";
import styles from './Allplace.module.css';

export default function Allflowers() {
    return (
        <div className={styles.pageLayout}>
            <div className={styles.mainContainer}>
                <section className={styles.section}>
                    <h2 className={styles.title}>Все цветочные магазины</h2>
                    <div className={styles.restaurantGrid}>
                        {flower.map((element) => (
                            <Link key={element.id} to={`/flower/${element.id}`} className={styles.cardLink}>
                                <div className={styles.restaurantCard}>
                                    <div className={styles.imageBox}>
                                        {/* Убедись, что в массиве flower свойство называется imgflower или imghotel */}
                                        <img src={element.imgflower || element.imghotel} alt={element.name} />
                                    </div>
                                    
                                    <div className={styles.content}>
                                        <h3 className={styles.name}>{element.name}</h3>
                                        <p className={styles.description}>{element.des}</p>
                                        
                                        <div className={styles.priceWrapper}>
                                            <span className={styles.priceLabel}>Средняя стоимость букета</span>
                                            <span className={styles.priceValue}>{element.cheque}</span>
                                        </div>
                                        
                                        <span className={styles.more}>Заказать букет →</span>
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