import styles from './Place.module.css'

import rest_1 from "../assets/Rest 1.jpg";
import rest_2 from "../assets/Rest 2.jpg";

import flower_1 from "../assets/flower.webp";
import flower_2 from "../assets/flower 2.jpg";
import flower_3 from "../assets/flower 3.jpg";
import flower_4 from "../assets/flower 4.jpg";

import hotel from "../assets/hotel.jpg";
export default function Place(){
    return(
        <div>
            <section class="restaurants">
                <div>
                    <h2>Рестораны</h2>
                    <article className={styles.restaurantcard}>
                    <img src={rest_1} alt="Ресторан"/>
                    <div className={styles.cardinfo}>
                        <h3>Ресторан</h3>
                        <p className={styles.desc}>Описание ресторана</p>
                    </div>
                    </article>

                    <article className={styles.restaurantcard}>
                    <img src={rest_2} alt="Ресторан"/>
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
                        <img src={hotel} alt="Отель"/>
                        <div className={styles.hotelname}>Отель</div>
                    </div>
                </div>
                <div className={styles.morelink}><a href="#">→ Все гостиницы</a></div>
            </section>

            <section class="flowers">
                <h2>Цветочные магазины</h2>

                <div className={styles.flowersrow}>
                    <div className={styles.flowercard}>
                        <img src={flower_1} alt="Цветочная"/>
                        <div className={styles.flowername}>Название цветов</div>
                        <div className={styles.price}>от 20,000 ₸</div>
                    </div>

                    <div className={styles.flowercard}>
                        <img src={flower_2} alt="Цветочная"/>
                        <div className={styles.flowername}>Название цветов</div>
                        <div className={styles.price}>от 20,000 ₸</div>
                    </div>

                    <div className={styles.flowercard}>
                        <img src={flower_3} alt="Цветочная"/>
                        <div className={styles.flowername}>Название цветов</div>
                        <div className={styles.price}>от 20,000 ₸</div>
                    </div>

                    <div className={styles.flowercard}>
                        <img src={flower_4} alt="Цветочная"/>
                        <div className={styles.flowername}>Название цветов</div>
                        <div className={styles.price}>от 20,000 ₸</div>
                    </div>
                    

                </div>

                <div className= {styles.morelink}><a href="#">→ Все цветочные магазины</a></div>
            </section>

        </div>
    )
}