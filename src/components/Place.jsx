import styles from './Place.module.css'



import flower_1 from "../assets/flower 1.png";
import flower_2 from "../assets/flower 2.png";

import { Link } from "react-router-dom";
import  {restaurant} from './AllPlace';
import  {flower} from './AllPlace';
import  {hotel} from './AllPlace';
import { useState } from 'react';

export default function Place(){

    return(
        <div>
            <section className={styles.flowers}>
                <h2>Рестораны </h2>
                <div className={styles.flowersrow}>
                    {restaurant.map((element)=>(
                        <Link key={element.id} to={`/restaurant/${element.id}`}>
                            <div className={styles.flowercard}>
                                <img src={element.imgrest} alt="Ресторан"/>
                                <div className={styles.flowername}>{element.name}</div>
                                <div className={styles.price}>Средний чек {element.cheque}</div>
                                
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.flowers}>
                <h2>Отели </h2>
                <div className={styles.flowersrow}>
                    {hotel.map((element)=>(
                        <Link key={element.id} to={`/hotel/${element.id}`}>
                            <div className={styles.flowercard}>
                                <img src={element.imghotel} alt="Отель"/>
                                <div className={styles.flowername}>{element.name}</div>
                                <div className={styles.price}>Средняя стоимость номера {element.cheque}</div>
                                
                            </div>
                        </Link>
                    ))}
                </div>
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