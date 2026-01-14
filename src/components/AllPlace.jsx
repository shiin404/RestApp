import rest_1 from "../assets/Rest 1.png";
import rest_2 from "../assets/Rest 2.png";
import { Link } from "react-router-dom";
import flower_1 from "../assets/flower 1.png";
import flower_2 from "../assets/flower 2.png";
import styles from './RestaurantPage.module.css';
import hotelimg from "../assets/hotel.png";
import hotelimg2 from "../assets/hotel2.jpg";
export const restaurant = [
    {
        id:11,
        name:'Tirol',
        des:'Ресторан, где Европа оживает в каждом блюде. Мы соединяем классические рецепты и современные вкусы, чтобы вы почувствовали дух настоящей вкусной кухни.',
        imgrest: rest_2,
        cheque:'24,000₸',
        booking: function(){
            return <Link to={`/booking/${this.id}`}><button className={styles.bookButton}>Забронировать</button></Link>
        }
    },
    {
        id:12,
        name:'Baoli',
        des:'Уютное пространство с атмосферой вкуса и комфорта, где можно насладиться отдыхом, хорошей компанией и приятной атмосферой.',
        imgrest: rest_1,
        cheque:'24,000₸',
        booking: function(){
            return <Link to={`/booking/${this.id}`}><button className={styles.bookButton}>Забронировать</button></Link>
        }
    }
]
export const flower = [
    {
        id:21,
        name:'Ин лав',
        des:'Букеты от 15,000 ₸',
        imgflower: flower_1,
        cheque:'24,000₸',
    },
    {
        id:22,
        name:'Florist',
        des:'Букеты от 15,000 ₸',
        imgflower: flower_2,
        cheque:'24,000₸',
    },
]
export const hotel = [
    {
        id:31,
        name:'Отель',
        des:'Уютное пространство с атмосферой вкуса и комфорта, где можно насладиться отдыхом, хорошей компанией и приятной атмосферой.',
        imghotel: hotelimg,
        cheque:'24,000₸',
    },
    {
        id:32,
        name:'Отель #2',
        des:'Уютное пространство с атмосферой вкуса и комфорта, где можно насладиться отдыхом, хорошей компанией и приятной атмосферой.',
        imghotel: hotelimg2,
        cheque:'20,000₸',
    }
]
