import { useState, useContext, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { flower } from '../AllData/AllPlace';
import { flowers as readySets } from '../AllData/AllMenu';
import { SubscribeContext } from '../AllData/SubscribeContext';
import styles from './BuyFlower.module.css';

const UNIT_PRICE = 1000;

export default function BuyFlower() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { BuyFlower } = useContext(SubscribeContext);

    // Поиск основного магазина цветов
    const shopData = useMemo(() => flower.find(item => item.id === Number(id)), [id]);

    // Состояния формы
    const [customFlowerName, setCustomFlowerName] = useState('');
    const [customQuantity, setCustomQuantity] = useState(1);
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [selectedSetId, setSelectedSetId] = useState(0);

    // Поиск выбранного готового сета
    const selectedSet = useMemo(() => 
        readySets.find(item => item.id === selectedSetId), 
    [selectedSetId]);

    // Расчет итоговой стоимости через useMemo
    const totalOrderPrice = useMemo(() => {
        if (selectedSet) return selectedSet.price;
        return UNIT_PRICE * customQuantity;
    }, [selectedSet, customQuantity]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handleOrderConfirmation = () => {
        if (!deliveryAddress.trim()) {
            alert("Пожалуйста, укажите адрес доставки!");
            return;
        }

        if (selectedSet) {
            BuyFlower(
                selectedSet.id, 
                selectedSet.name, 
                selectedSet.quantity, 
                selectedSet.price, 
                deliveryAddress, 
                selectedSet.imgflower
            );
        } else {
            if (!customFlowerName.trim() || customQuantity < 1) {
                alert("Пожалуйста, введите название сорта и количество!");
                return;
            }
            BuyFlower(id, customFlowerName, customQuantity, totalOrderPrice, deliveryAddress);
        }

        alert("Заказ успешно оформлен!");
        navigate('/profile/1');
    };

    if (!shopData) return <div className={styles.container}>Товар не найден</div>;

    return (
        <div className={styles.container}> 
            <div className={styles.card}>
                <img src={shopData.imgflower} alt={shopData.name} className={styles.imagePreview} />
                
                <h1 className={styles.title}>{shopData.name}</h1>
                <p className={styles.subtitle}>Соберите свой букет или выберите готовый сет</p>

                {/* Секция 1: Индивидуальный заказ */}
                <div className={`${styles.section} ${selectedSetId > 0 ? styles.disabledSection : ''}`}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Свой сорт ({UNIT_PRICE} ₸/шт)</label>
                        <input 
                            className={styles.input} 
                            type="text" 
                            placeholder="Название цветка..."
                            value={customFlowerName}
                            onChange={(e) => setCustomFlowerName(e.target.value)}
                            disabled={selectedSetId > 0}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Количество (шт)</label>
                        <input 
                            className={styles.input} 
                            type="number" 
                            min="1"
                            value={customQuantity}
                            onChange={(e) => setCustomQuantity(Number(e.target.value))}
                            disabled={selectedSetId > 0}
                        />
                    </div>
                </div>

                <div className={styles.divider}>ИЛИ ВЫБЕРИТЕ ГОТОВЫЙ СЕТ</div>

                {/* Секция 2: Готовые сеты */}
                <div className={styles.setGrid}>
                    {readySets.map((item) => (
                        <div 
                            key={item.id}
                            className={`${styles.setItem} ${selectedSetId === item.id ? styles.activeSet : ''}`} 
                            onClick={() => setSelectedSetId(prev => prev === item.id ? 0 : item.id)}
                        >
                            <img src={item.imgflower} alt={item.name} className={styles.setImg} />
                            <div className={styles.setInfo}>
                                <h3>{item.name}</h3>
                                <p>{item.quantity} шт. • <span>{item.price.toLocaleString()} ₸</span></p>
                            </div>
                            {selectedSetId === item.id && <div className={styles.checkMark}>✓</div>}
                        </div>
                    ))}
                </div>

                <div className={styles.inputGroup} style={{ marginTop: '20px' }}>
                    <label className={styles.label}>Адрес доставки</label>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder="Улица, дом, квартира"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)} 
                    />
                </div>

                <div className={styles.priceDisplay}>
                    <span>К оплате:</span>
                    <span className={styles.amount}>
                        {totalOrderPrice.toLocaleString()} ₸
                    </span>
                </div>

                <button className={styles.buyButton} onClick={handleOrderConfirmation}>
                    Оформить заказ
                </button>

                <Link to={`/flower/${id}`} className={styles.backLink}>← Назад</Link>
            </div>
        </div>
    );
}