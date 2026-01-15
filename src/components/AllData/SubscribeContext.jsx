import { useState, createContext, useEffect, useCallback } from "react";

export const SubscribeContext = createContext();

export const SubscribeProvider = ({ children }) => {
    // Хелпер для инициализации состояния из localStorage
    const getInitialState = (key) => {
        const saved = localStorage.getItem(key);
        try {
            return saved ? JSON.parse(saved) : {};
        } catch {
            return {};
        }
    };

    // Состояния
    const [sub, setSub] = useState(() => getInitialState('sub'));
    const [Booking, SetBooking] = useState(() => getInitialState('booking'));
    const [Flower, SetFlower] = useState(() => getInitialState('flower'));
    const [BookingHotel, SetBookingHotel] = useState(() => getInitialState('bookingHotel'));

    // Эффекты синхронизации (краткая запись)
    useEffect(() => localStorage.setItem('sub', JSON.stringify(sub)), [sub]);
    useEffect(() => localStorage.setItem('booking', JSON.stringify(Booking)), [Booking]);
    useEffect(() => localStorage.setItem('flower', JSON.stringify(Flower)), [Flower]);
    useEffect(() => localStorage.setItem('bookingHotel', JSON.stringify(BookingHotel)), [BookingHotel]);

    // --- Логика Подписок ---
    const subscribe = (id, name) => {
        setSub(prev => ({ ...prev, [id]: { name } }));
    };

    const unsubscribe = (id) => {
        setSub(({ [id]: _, ...copy }) => copy); // Чистое удаление ключа через деструктуризацию
    };

    // --- Логика Бронирования ---
    const AddBooking = (id, name, person, datetime, wish) => {
        SetBooking(prev => ({ ...prev, [id]: { name, person, datetime, wish } }));
    };

    const deleteBooking = (id) => {
        SetBooking(({ [id]: _, ...copy }) => copy);
    };

    // --- Логика Цветов ---
    const BuyFlower = (id, name, quantity, price, address, imgf) => {
        SetFlower(prev => ({ ...prev, [id]: { name, price, quantity, address, imgf } }));
    };

    const deleteFlower = (id) => {
        SetFlower(({ [id]: _, ...copy }) => copy);
    };

    // --- Логика Отелей ---
    const AddBookingHotel = (id, name, checkin, exit, guests, price, img) => {
        SetBookingHotel(prev => ({
            ...prev,
            [id]: { name, checkin, exit, guests, price, img }
        }));
    };

    const deleteBookingHotel = (id) => {
        SetBookingHotel(({ [id]: _, ...copy }) => copy);
    };

    return (
        <SubscribeContext.Provider value={{ 
            sub, unsubscribe, subscribe,
            Booking, AddBooking, deleteBooking,
            Flower, BuyFlower, deleteFlower,
            BookingHotel, AddBookingHotel, deleteBookingHotel
        }}>
            {children}
        </SubscribeContext.Provider>
    );
};