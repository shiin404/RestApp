import styles from './Place.module.css';
import { Link } from "react-router-dom";
import { restaurant, flower, hotel } from './AllPlace';

export default function Place() {
    return (
        <div className={styles.mainContainer}>
            {/* Рестораны */}
            <section className={styles.flowers}>
                <h2>Рестораны</h2>
                <div className={styles.flowersrow}>
                    {restaurant.map((element) => (
                        <Link key={element.id} to={`/restaurant/${element.id}`} className={styles.cardLink}>
                            <div className={styles.flowercard}>
                                <img src={element.imgrest} alt="Ресторан" />
                                <div className={styles.flowername}>{element.name}</div>
                                <div className={styles.price}>Средний чек {element.cheque}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.morelink}><a href="restaurants">→ Все рестораны</a></div>
            </section>

            {/* Гостиницы */}
            <section className={styles.flowers}>
                <h2>Гостиницы</h2>
                <div className={styles.flowersrow}>
                    {hotel.map((element) => (
                        <Link key={element.id} to={`/hotel/${element.id}`} className={styles.cardLink}>
                            <div className={styles.flowercard}>
                                <img src={element.imghotel} alt="Отель" />
                                <div className={styles.flowername}>{element.name}</div>
                                <div className={styles.price}>Стоимость номера {element.cheque}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.morelink}><a href="#">→ Все гостиницы</a></div>
            </section>

            {/* Цветочные магазины */}
            <section className={styles.flowers}>
                <h2>Цветочные магазины</h2>
                <div className={styles.flowersrow}>
                    {flower.map((element) => (
                        <Link key={element.id} to={`/flower/${element.id}`} className={styles.cardLink}>
                            <div className={styles.flowercard}>
                                <img src={element.imgflower} alt="Цветочная" />
                                <div className={styles.flowername}>{element.name}</div>
                                <div className={styles.price}>{element.des}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.morelink}><a href="#">→ Все цветочные магазины</a></div>
            </section>
        </div>
    );
}