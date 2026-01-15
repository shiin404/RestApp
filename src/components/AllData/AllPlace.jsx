import rest_1 from "../../assets/Rest 1.png";
import rest_2 from "../../assets/Rest 2.png";
import flower_1 from "../../assets/flower 1.png";
import flower_2 from "../../assets/flower 2.png";
import hotelimg from "../../assets/hotel.png";
import hotelimg2 from "../../assets/hotel2.jpg";

export const restaurant = [
    {
        id: 11,
        name: 'Tirol',
        des: 'Ресторан, где Европа оживает в каждом блюде. Мы соединяем классические рецепты и современные вкусы.',
        imgrest: rest_2,
        cheque: '24,000₸',
        address: 'Проспект Жибек Жолы, 98',
        city: 'г. Астана',
        phone: '+77778056056',
        rating: 4.9,
        schedule: [
            { day: 'Пн — Вт', time: '10:00 – 24:00' },
            { day: 'Ср — Чт', time: '10:00 – 01:00' },
            { day: 'Пт — Сб', time: '10:00 – 02:00' },
            { day: 'Воскресенье', time: '10:00 – 24:00' }
        ]
    },
    {
        id: 12,
        name: 'Baoli',
        des: 'Уютное пространство с атмосферой вкуса и комфорта, где можно насладиться отдыхом и хорошей компанией.',
        imgrest: rest_1,
        cheque: '24,000₸',
        address: 'Улица Туркестан, 16',
        city: 'г. Астана',
        phone: '+77087089998',
        rating: 4.7,
        schedule: [
            { day: 'Круглосуточно', time: '00:00 – 24:00' },
        ]
    }
];

export const flower = [
    {
        id: 21,
        name: 'Ин лав',
        des: 'Мы создаём букеты из свежих цветов, чтобы каждый момент стал особенным.',
        imgflower: flower_1,
        cheque: '24,000₸',
        address: 'Улица Алихан Бокейхан, 48',
        city: 'г. Астана',
        phone: '+77071117701',
        schedule: [{ day: 'Ежедневно', time: '10:00 – 24:00' }]
    },
    {
        id: 22,
        name: 'Florist',
        des: 'Мы создаём букеты из свежих цветов, чтобы каждый момент стал особенным.',
        imgflower: flower_2,
        cheque: '24,000₸',
        address: 'Улица Кабанбай батыра, 65',
        city: 'г. Алматы',
        phone: '+77004003818',
        schedule: [{ day: 'Ежедневно', time: '10:00 – 22:00' }]
    },
];

export const hotel = [
    {
        id: 31,
        name: 'Grand Hotel',
        des: 'Премиальный отдых в самом центре столицы.',
        imghotel: hotelimg,
        cheque: '24,000₸',
        location: 'Проспект Победы, 12',
        rating: 5.0
    },
    {
        id: 32,
        name: 'Comfort Inn',
        des: 'Уют и тишина для вашего идеального отпуска.',
        imghotel: hotelimg2,
        cheque: '20,000₸',
        location: 'Улица Мира, 5',
        rating: 4.5
    }
];