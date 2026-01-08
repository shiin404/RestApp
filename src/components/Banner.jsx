import styles from './Banner.module.css'

import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

export default function Banner(){
    return(
        <section className={styles.bannersgrid}>
            <div className={styles.banneritem}>
                <img src={banner1} alt="Баннер 1"/>
            </div>
            <div className={styles.banneritem} >
                <img src={banner2} alt="Баннер 2"/>
            </div>
            <div className={styles.banneritem}>
                <img src={banner3} alt="Баннер 3"/>
            </div>
            <div className={styles.banneritem}>
                <img src={banner4} alt="Баннер 4"/>
            </div>
        </section>
    )
}