import { useParams, Link } from "react-router-dom";
import { hotel } from './AllPlace';
export default function HotelPage(){
    const {id} = useParams()
    const Hotel = hotel.find((el)=> el.id == id)
    return(
        <h1>{Hotel.name}</h1>
    )
}