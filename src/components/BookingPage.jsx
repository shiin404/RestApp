import { useParams } from "react-router-dom";
import { restaurant } from './AllPlace';

export default function BookingPage(){
    const {id} = useParams()
    const Rest = restaurant.find((element)=>(element.id == id))
    return(
        <h1>Вы бронируете {Rest.name}</h1>
    )
}

