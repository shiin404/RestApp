import { useParams, Link, useNavigate } from "react-router-dom";
import { flower } from './AllPlace';
import { useState, useContext, useEffect } from "react";
import { SubscribeContext } from './SubscribeContext';
import styles from './BuyFlower.module.css';
import { flowers } from './AllMenu';

export default function BuyFlower() {
    const { id } = useParams();
    const navigate = useNavigate();
    const Myflower = flower.find(item => item.id == id);
    const { BuyFlower } = useContext(SubscribeContext);

    const FIXED_PRICE = 1000;

    const [nameFlower, Setname] = useState(Myflower?.name || '');
    const [quantityFlower, Setquantity] = useState(1);
    const [Address, Setaddress] = useState("");
    const [FlowerSet, Setflower] = useState(0);
    
    let FlowerSetBuy = FlowerSet === 0 ? null : flowers.find((el) => el.id === FlowerSet);
    
    const [totalPrice, SetTotalPrice] = useState(FIXED_PRICE);

    useEffect(() => {
        SetTotalPrice(FIXED_PRICE * quantityFlower);
    }, [quantityFlower]);

    if (!Myflower) return <div className={styles.container}>Товар не найден</div>;

    const handleConfirm = () => {
        if (!Address.trim()) {
            alert("Пожалуйста, укажите адрес доставки!");
            return;
        }

        if (FlowerSet > 0) {
            BuyFlower(FlowerSetBuy.id, FlowerSetBuy.name, FlowerSetBuy.quantity, FlowerSetBuy.price, Address, FlowerSetBuy.imgflower);
            navigate('/profile/1');
            return;
        }

        if (!nameFlower.trim() || quantityFlower < 1) {
            alert("Пожалуйста, введите название сорта и количество!");
            return;
        }

        BuyFlower(id, nameFlower, quantityFlower, totalPrice, Address);
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
                <p className={styles.subtitle}>Соберите свой букет или выберите готовый</p>

                {/* Секция 1: Свой сорт */}
                <div className={`${styles.section} ${FlowerSet > 0 ? styles.disabledSection : ''}`}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Свой сорт (1000 ₸/шт)</label>
                        <input 
                            className={styles.input} 
                            type="text" 
                            placeholder="Название цветка..."
                            value={nameFlower}
                            onChange={(e) => Setname(e.target.value)}
                            disabled={FlowerSet > 0}
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
                            disabled={FlowerSet > 0}
                        />
                    </div>
                </div>

                <div className={styles.divider}>ИЛИ ВЫБЕРИТЕ ГОТОВЫЙ СЕТ</div>

                {/* Секция 2: Заготовки (flowers) */}
                <div className={styles.setGrid}>
                    {flowers.map((el) => (
                        <div 
                            key={el.id}
                            className={`${styles.setItem} ${FlowerSet === el.id ? styles.activeSet : ''}`} 
                            onClick={() => Setflower((prev) => prev === el.id ? 0 : el.id)}
                        >
                            <img src={el.imgflower} alt={el.name} className={styles.setImg} />
                            <div className={styles.setInfo}>
                                <h3>{el.name}</h3>
                                <p>{el.quantity} шт. • <span>{el.price} ₸</span></p>
                            </div>
                            {FlowerSet === el.id && <div className={styles.checkMark}>✓</div>}
                        </div>
                    ))}
                </div>

                <div className={styles.inputGroup} style={{marginTop: '20px'}}>
                    <label className={styles.label}>Адрес доставки</label>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder="Улица, дом, квартира"
                        value={Address}
                        onChange={(e) => Setaddress(e.target.value)} 
                    />
                </div>

                <div className={styles.priceDisplay}>
                    <span>К оплате:</span>
                    <span className={styles.amount}>
                        {FlowerSet > 0 ? FlowerSetBuy.price : totalPrice} ₸
                    </span>
                </div>

                <button className={styles.buyButton} onClick={handleConfirm}>
                    Оформить заказ
                </button>

                <Link to={`/flower/${id}`} className={styles.backLink}>← Назад</Link>
            </div>
        </div>
    );
}