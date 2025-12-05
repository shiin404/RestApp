import { useParams } from "react-router-dom";
import { restaurant } from './AllPlace';
import styles from './RestaurantPage.module.css';
import { Link } from "react-router-dom";

export default function RestaurantPage() {
    const { id } = useParams();
    const Rest = restaurant.find(item => item.id == id);

    if (!Rest) return <h1 style={{textAlign: 'center', marginTop: '50px'}}>Ресторан не найден</h1>;

    return (
        <div className={styles.page}>
            <Link to='/'>Назад</Link>
            <img className={styles.image} src={Rest.imgrest} alt={Rest.name} />
            <h1 className={styles.title}>{Rest.name}</h1>
            <p className={styles.description}>{Rest.des}</p>
            <button className={styles.bookButton}>Забронировать</button>
        </div>
    )
}
