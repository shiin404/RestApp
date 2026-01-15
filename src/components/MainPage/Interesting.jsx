import styles from './Interesting.module.css';

import banner5 from "../../assets/banner5.png";
import banner6 from "../../assets/banner6.jpg";
import banner7 from "../../assets/banner7.jpg";
import banner8 from "../../assets/banner8.jpg";
import banner9 from "../../assets/banner9.jpg";
import banner10 from "../../assets/banner10.jpg";

export default function Interesting() {
    const banners = [banner5, banner6, banner7, banner8, banner9, banner10];

    return (
        <section className={styles.interesting}>
            <h2>Интересное</h2>
            <div className={styles.interestinggrid}>
                {banners.map((src, index) => (
                    <div key={index} className={styles.interestingitem}>
                        <img src={src} alt={`Banner${index + 5}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}