import styles from './Place.module.css'
import banner1 from "../assets/banner1.jpg";
export default function Place(){
    return(
        <div>
            <section class="restaurants">
                <div>
                    <h2>Рестораны</h2>
                    <article className={styles.restaurantcard}>
                    <img src={banner1} alt="Ресторан"/>
                    <div className={styles.cardinfo}>
                        <h3>Ресторан</h3>
                        <p className={styles.desc}>Описание ресторана</p>
                    </div>
                    </article>

                    <article className={styles.restaurantcard}>
                    <img src={banner1} alt="Ресторан"/>
                    <div className={styles.cardinfo}>
                        <h3>Ресторан</h3>
                        <p className={styles.desc}>Описание ресторана</p>
                    </div>
                    </article>

                    <div className={styles.morelink}><a href="#">→ Все рестораны</a></div>
                </div>
            </section>

            <section className={styles.hotels}>
                <h2>Гостиницы</h2>
                <div className={styles.hotelsrow}>
                    <div className={styles.hotelcard}>
                        <img src={banner1} alt="Отель"/>
                        <div className={styles.hotelname}>Отель</div>
                    </div>
                </div>
                <div className={styles.morelink}><a href="#">→ Все гостиницы</a></div>
            </section>
            <section className={styles.flowers}>
                <h2>Цветочные магазины</h2>
                <div className={styles.flowersrow}>
                    <div className={styles.flowercard}>
                        <img src={banner1} alt="Цветочная"/>
                        <div className={styles.flowername}>Название цветов</div>
                        <div className={styles.price}>от 20,000 ₸</div>
                    </div>
              
                </div>
                <div className={styles.morelink}><a href="#">→ Все цветочные магазины</a></div>
            </section>
        </div>
    )
}