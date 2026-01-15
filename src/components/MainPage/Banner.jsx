import styles from './Banner.module.css';
import banner1 from "../../assets/banner1.jpeg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";

const BANNERS_LIST = [
    { id: 1, src: banner1, alt: "Banner 1" },
    { id: 2, src: banner2, alt: "Banner 2" },
    { id: 3, src: banner3, alt: "Banner 3" },
    { id: 4, src: banner4, alt: "Banner 4" },
];

export default function Banner() {
    return (
        <section className={styles.bannersgrid}>
            {BANNERS_LIST.map(({ id, src, alt }) => (
                <div key={id} className={styles.banneritem}>
                    <img src={src} alt={alt} />
                </div>
            ))}
        </section>
    );
}