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

    const unsubscribe = (id) => setSub((prev) => ({ ...prev, [id]: false }));
    const subscribe = (id) => setSub((prev) => ({ ...prev, [id]: true }));

    useEffect(()=>{
        localStorage.setItem('sub',JSON.stringify(sub))
    },[sub])

    return (
        <SubscribeContext.Provider value={{ sub, unsubscribe, subscribe }}>
            {children}
        </SubscribeContext.Provider>
    );
};
