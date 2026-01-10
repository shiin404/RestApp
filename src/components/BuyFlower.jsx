import { useParams, Link, useNavigate } from "react-router-dom";
import { flower } from './AllPlace';
import { useState, useContext, useEffect } from "react";
import { SubscribeContext } from './SubscribeContext';
import styles from './BuyFlower.module.css';

export default function BuyFlower() {
    const { id } = useParams();
    const navigate = useNavigate();
    const Myflower = flower.find(item => item.id == id);
    const { BuyFlower } = useContext(SubscribeContext);

    // Фиксированная цена за любой цветок
    const FIXED_PRICE = 1000;

    // Состояния формы
    const [nameFlower, Setname] = useState(Myflower?.name || "");
    const [quantityFlower, Setquantity] = useState(1);
    const [Address, Setaddress] = useState("");
    
    // Итоговая цена (изначально 1000 * 1)
    const [totalPrice, SetTotalPrice] = useState(FIXED_PRICE);

    // Пересчет: фиксированная цена * количество
    useEffect(() => {
        SetTotalPrice(FIXED_PRICE * quantityFlower);
    }, [quantityFlower]);

    if (!Myflower) return <div className={styles.container}>Товар не найден</div>;

    const handleConfirm = () => {
        // Проверка: все ли поля заполнены
        if (!nameFlower.trim() || !Address.trim() || !quantityFlower) {
            alert("Пожалуйста, заполните адрес и проверьте данные!");
            return;
        }

        if (quantityFlower < 1) {
            alert("Минимальное количество — 1 шт.");
            return;
        }

        // Отправляем данные в контекст
        BuyFlower(id, nameFlower, totalPrice, quantityFlower, Address);
        navigate('/profile/1');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to="/" className={styles.logo}>RestApp</Link>
                <Link to='/profile/1'>
                    <button className={styles.profileBtn}>Profile</button>
                </Link>
            </header>
                        
            <div className={styles.card}>
                <img src={Myflower.imgflower} alt={Myflower.name} className={styles.imagePreview} />
                
                <h1 className={styles.title}>{Myflower.name}</h1>
                <p className={styles.subtitle}>Любой сорт по {FIXED_PRICE} ₸</p>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Выбранный сорт</label>
                    <input 
                        className={styles.input} 
                        type="text" 
                        value={nameFlower}
                        readOnly // Пользователь видит сорт, но не меняет его (опционально)
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Количество (шт)</label>
                    <input 
                        className={styles.input} 
                        type="number" 
                        min="1"
                        value={quantityFlower}
                        onChange={(e) => Setquantity(Number(e.target.value))} 
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Адрес доставки</label>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder="Город, улица, дом"
                        value={Address}
                        onChange={(e) => Setaddress(e.target.value)} 
                    />
                </div>

                <div className={styles.priceDisplay}>
                    <span>Итого к оплате:</span>
                    <span className={styles.amount}>{totalPrice} ₸</span>
                </div>

                <button 
                    className={styles.buyButton} 
                    onClick={handleConfirm}
                >
                    Заказать за {totalPrice} ₸
                </button>

                <Link to={`/flower/${id}`} className={styles.backLink}>
                    ← Отмена
                </Link>
            </div>
        </div>
    );
}