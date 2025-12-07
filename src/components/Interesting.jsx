import styles from './Interesting.module.css';

import banner5 from "../assets/banner5.jpg";
import banner6 from "../assets/banner6.jpg";
import banner7 from "../assets/banner7.jpg";
import banner8 from "../assets/banner8.jpg";
import banner9 from "../assets/banner9.jpg";
import banner10 from "../assets/banner10.jpg";

export default function Interesting() {
    return (
        <section className={styles.interesting} style={{ marginTop: "24px" }}>
            <h2>Интересное</h2>

            <div className={`${styles.interestinggrid} ${styles.spacing}`}>

                <div className={`${styles.interestingrow} ${styles.three}`}>
                    <div className={styles.interestingitem}>
                        <img src={banner5} alt="Banner5" />

                    </div>

                    <div className={styles.interestingitem}>
                        <img src={banner6} alt="Banner6" />

                    </div>

                    <div className={styles.interestingitem}>
                        <img src={banner7} alt="Banner7" />

                    </div>
                </div>

                <div className={`${styles.interestingrow} ${styles.three}`}>
                    <div className={styles.interestingitem}>
                        <img src={banner8} alt="Banner8" />

                    </div>

                    <div className={styles.interestingitem}>
                        <img src={banner9} alt="Banner9" />

                    </div>

                    <div className={styles.interestingitem}>
                        <img src={banner10} alt="Banner10" />

                    </div>
                </div>

            </div>
        </section>
    );
}
