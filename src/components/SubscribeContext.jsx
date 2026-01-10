import { useState, createContext ,useEffect} from "react";
import { useParams } from "react-router-dom";
// создаём контекст
export const SubscribeContext = createContext();

// провайдер
export const SubscribeProvider = ({ children }) => {
    const [sub, setSub] = useState(() => {
        const saved = localStorage.getItem('sub')
        return saved ? JSON.parse(saved) : {}
    });

    const unsubscribe = (id) => {
        setSub(prev=>{
            const copy = {...prev}
            delete copy[id]
            return copy
        })
    }
        
    const subscribe = (id,name) => 
        setSub((prev) => 
            ({ ...prev, [id]: {name:name} }));

    useEffect(()=>{
        localStorage.setItem('sub',JSON.stringify(sub))
    },[sub])

    const [Booking,SetBooking] = useState(()=>{
        const savedBook = localStorage.getItem('booking')
        return savedBook ? JSON.parse(savedBook) : {}
    })

    const AddBooking = (id,name,person,datetime,wish) => {
        SetBooking((prev) =>({...prev,[id]:{
            name:name,
            person:person,
            datetime:datetime,
            wish:wish

        }}))
        
    }
    const deleteBooking = (id)=>{
        SetBooking((prev)=>{
            const copy = {...prev}
            delete copy[id]
            return copy
        })
    }
    useEffect(()=>{
        localStorage.setItem('booking',JSON.stringify(Booking))
    },[Booking])

    const [Flower,SetFlower] = useState(()=>{
        const savedFlower = localStorage.getItem('flower')
        return savedFlower ? JSON.parse(savedFlower) : {}
    })

    const BuyFlower = (id,name,quantity,price,address)=>{
        SetFlower((prev)=>({...prev,[id]:{
            name:name,
            price:price,
            quantity:quantity,
            address:address
        }}))
    }
    const deleteFlower = (id)=>{
        SetFlower((prev)=>{
            const copyFlower = {...prev}
            delete copyFlower[id]
            return copyFlower
        })
    }
    useEffect(()=>{
        localStorage.setItem('flower',JSON.stringify(Flower))
    },[Flower])

    return (
        <SubscribeContext.Provider value={{ sub, unsubscribe, subscribe,Booking,AddBooking,deleteBooking,Flower,BuyFlower,deleteFlower}}>
            {children}
        </SubscribeContext.Provider>
    );
};
