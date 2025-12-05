import styles from './Place.module.css'

import rest_1 from "../assets/Rest 1.png";
import rest_2 from "../assets/Rest 2.png";

import flower_1 from "../assets/flower 1.png";
import flower_2 from "../assets/flower 2.png";
import flower_3 from "../assets/flower 3.jpg";
import flower_4 from "../assets/flower 4.jpg";
import { Link } from "react-router-dom";
import  {restaurant} from './AllPlace';
import hotel from "../assets/hotel.jpg";
import { useState } from 'react';

export default function Place(){
    let [restauran,Setrestauran] = useState([
        {
            name:'Tirol',
            des:'Ресторан, где Европа оживает в каждом блюде. Мы соединяем классические рецепты и современные вкусы, чтобы вы почувствовали дух настоящей вкусной кухни.',
            imgrest: rest_2
        },
        {
            name:'Baoli',
            des:'Уютное пространство с атмосферой вкуса и комфорта, где можно насладиться отдыхом, хорошей компанией и приятной атмосферой.',
            imgrest: rest_1
        }
    ])
    let [flowers,Setflowers] = useState([
        {
            name:'Ин лав ',
            price:'Букеты от 15,000 ₸',
            imgflowers: flower_1
        },
        {
            name:'Florist',
            price:'Букеты от 15,000 ₸',
            imgflowers: flower_2
        }
    ])
    return(
        <div>
            <section className={styles.restaurants}>
                <div>
                    <h2>Рестораны</h2>
                    {restaurant.map((element)=>(
                        <Link key = {element.id} to={`/restaurant/${element.id}`}>
                            <article className={styles.restaurantcard}>
                                <img src={element.imgrest} alt="Ресторан"/>
                                <div className={styles.cardinfo}>
                                    <h3>{element.name}</h3>
                                    <p className={styles.desc}>{element.des}</p>
                                </div>
                            </article>
                        </Link>
                    ))}
                    
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

            <section className={styles.flowers}>
                <h2>Цветочные магазины</h2>

                <div className={styles.flowersrow}>
                    {flowers.map((element)=>(
                        <div className={styles.flowercard}>
                            <img src={element.imgflowers} alt="Цветочная"/>
                            <div className={styles.flowername}>{element.name}</div>
                            <div className={styles.price}>{element.price}</div>
                        </div>
                    ))}
                    <div className={styles.flowercard}>
                        <img src={flower_3} alt="Цветочная"/>
                        <div className={styles.flowername}>Цветочная студия</div>
                        <div className={styles.price}>от 20,000 ₸</div>
                    </div>

                    <div className={styles.flowercard}>
                        <img src={flower_4} alt="Цветочная"/>
                        <div className={styles.flowername}>Цветочная студия</div>
                        <div className={styles.price}>от 20,000 ₸</div>
                    </div>
                    

                </div>

                <div className= {styles.morelink}><a href="#">→ Все цветочные магазины</a></div>
            </section>

        </div>
    )
}