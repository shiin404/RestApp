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
    return (
        <SubscribeContext.Provider value={{ sub, unsubscribe, subscribe,Booking,AddBooking,deleteBooking}}>
            {children}
        </SubscribeContext.Provider>
    );
};
