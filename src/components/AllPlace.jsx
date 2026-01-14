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
        id: 11,
        name: 'Tirol',
        des: 'Ресторан, где Европа оживает в каждом блюде. Мы соединяем классические рецепты и современные вкусы, чтобы вы почувствовали дух настоящей вкусной кухни.',
        imgrest: rest_2,
        cheque: '24,000₸',
        booking: function() {
            return <Link to={`/booking/${this.id}`}><button className={styles.bookButton}>Забронировать</button></Link>
        },
        address: 'Проспект Жибек Жолы, 98',
        city: 'г. Астана',
        phone: '+77778056056',
        schedule: [
            { day: 'Пн — Вт', time: '10:00 – 24:00' },
            { day: 'Ср — Чт', time: '10:00 – 01:00' },
            { day: 'Пт — Сб', time: '10:00 – 02:00' },
            { day: 'Воскресенье', time: '10:00 – 24:00' }
        ]
    },
    {
        id:12,
        name:'Baoli',
        des:'Уютное пространство с атмосферой вкуса и комфорта, где можно насладиться отдыхом, хорошей компанией и приятной атмосферой.',
        imgrest: rest_1,
        cheque:'24,000₸',
        booking: function(){
            return <Link to={`/booking/${this.id}`}><button className={styles.bookButton}>Забронировать</button></Link>
        },
        address:'​Улица Туркестан, 16',
        city:'г. Астана',
        phone: '+77087089998',
        schedule: [
            { day: 'Круглосуточно', time: '00:00 – 24:00' },
        ]
    }
]
export const flower = [
    {
        id:21,
        name:'Ин лав',
        des:'Мы создаём букеты из свежих цветов, чтобы каждый момент стал особенным и запомнился надолго.',
        imgflower: flower_1,
        cheque:'24,000₸',
        address:'Улица Алихан Бокейхан, 48',
        city:'г. Астана',
        phone: '+77071117701',
        schedule: [
            { day: 'Ежедневно', time: '10:00 – 24:00' },
        ]
    },
    {
        id:22,
        name:'Florist',
        des:'Мы создаём букеты из свежих цветов, чтобы каждый момент стал особенным и запомнился надолго.',
        imgflower: flower_2,
        cheque:'24,000₸',
        address:'Улица Кабанбай батыра, 65',
        city:'г. Алматы',
        phone: '+77004003818',
        schedule: [
            { day: 'Ежедневно', time: '10:00 – 22:00' },
        ]
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
