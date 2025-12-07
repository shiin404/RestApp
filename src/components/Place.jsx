import styles from './Place.module.css'



import flower_1 from "../assets/flower 1.png";
import flower_2 from "../assets/flower 2.png";

import { Link } from "react-router-dom";
import  {restaurant} from './AllPlace';
import  {flower} from './AllPlace';
import hotel from "../assets/hotel.jpg";
import { useState } from 'react';

export default function Place(){

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
                        <div className={styles.hotelname}></div>
                    </div>
                </div>
                <div className={styles.morelink}><a href="#">→ Все гостиницы</a></div>
            </section>

            <section className={styles.flowers}>
                <h2>Цветочные магазины</h2>

                <div className={styles.flowersrow}>
                    {flower.map((element)=>(
                        <Link key={element.id} to={`/flower/${element.id}`}>
                            <div className={styles.flowercard}>
                                <img src={element.imgflower} alt="Цветочная"/>
                                <div className={styles.flowername}>{element.name}</div>
                                <div className={styles.price}>{element.des}</div>
                            </div>
                        </Link>
                    ))}
                    
                </div>

                <div className= {styles.morelink}><a href="#">→ Все цветочные магазины</a></div>
            </section>

        </div>
    )
}