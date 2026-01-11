import rest_1 from "../assets/Rest 1.png";
import rest_2 from "../assets/Rest 2.png";
import { Link } from "react-router-dom";
import flower_1 from "../assets/flower 1.png";
import flower_2 from "../assets/flower 2.png";
import styles from './RestaurantPage.module.css';
import hotelimg from "../assets/hotel.jpg";
export const restaurant = [
    {
        id:1,
        name:'Tirol',
        des:'Ресторан, где Европа оживает в каждом блюде. Мы соединяем классические рецепты и современные вкусы, чтобы вы почувствовали дух настоящей вкусной кухни.',
        imgrest: rest_2,
        cheque:'24000₸',
        booking: function(){
            return <Link to={`/booking/${this.id}`}><button className={styles.bookButton}>Забронировать</button></Link>
        }
    },
    {
        id:2,
        name:'Baoli',
        des:'Уютное пространство с атмосферой вкуса и комфорта, где можно насладиться отдыхом, хорошей компанией и приятной атмосферой.',
        imgrest: rest_1,
        cheque:'24000₸',
        booking: function(){
            return <Link to={`/booking/${this.id}`}><button className={styles.bookButton}>Забронировать</button></Link>
        }
    }
]
export const flower = [
    {
        id:1,
        name:'Ин лав',
        des:'Букеты от 15,000 ₸',
        imgflower: flower_1
    },
    {
        id:2,
        name:'Florist',
        des:'Букеты от 15,000 ₸',
        price:52000,
        imgflower: flower_2,
    },
]
export const hotel = [
    {
        id:1,
        name:'Отель',
        des:'Уютное пространство с атмосферой вкуса и комфорта, где можно насладиться отдыхом, хорошей компанией и приятной атмосферой.',
        imghotel: hotelimg,
        cheque:'24000₸',
    }
]
