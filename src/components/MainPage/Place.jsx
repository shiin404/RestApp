import styles from './Place.module.css';
import { Link } from "react-router-dom";
import { restaurant, flower, hotel } from '../AllData/AllPlace';

const PlaceSection = ({ title, data, type, linkToAll }) => (
    <section className={styles.flowers}>
        <h2>{title}</h2>
        <div className={styles.flowersrow}>
            {data.map((item) => (
                <Link key={item.id} to={`/${type}/${item.id}`} className={styles.cardLink}>
                    <div className={styles.flowercard}>
                        <img 
                            src={item.imgrest || item.imghotel || item.imgflower} 
                            alt={title} 
                        />
                        <div className={styles.flowername}>{item.name}</div>
                        <div className={styles.price}>
                            {type === 'restaurant' && `Средний чек ${item.cheque}`}
                            {type === 'hotel' && `Стоимость номера ${item.cheque}`}
                            {type === 'flower' && `Букеты от ${item.cheque}`}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        <div className={styles.morelink}>
            <Link to={linkToAll}>→ Все {title.toLowerCase()}</Link>
        </div>
    </section>
);

export default function Place() {
    return (
        <div className={styles.mainContainer}>
            <PlaceSection 
                title="Рестораны" 
                data={restaurant} 
                type="restaurant" 
                linkToAll="/restaurants" 
            />
            
            <PlaceSection 
                title="Гостиницы" 
                data={hotel} 
                type="hotel" 
                linkToAll="/hotels" 
            />

            <PlaceSection 
                title="Цветочные магазины" 
                data={flower} 
                type="flower" 
                linkToAll="/flowers" 
            />
        </div>
    );
}