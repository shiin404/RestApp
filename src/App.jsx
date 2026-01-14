import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BookingPage from "./components/BookingPage"
import RestaurantPage from './components/RestaurantPage'
import FlowerPage from './components/FlowerPage'
import BuyFlower from './components/BuyFlower'
import HotelPage from './components/HotelPage'
import Bookhotel from './components/Bookhotel'
import Allrest from './components/Allrest'
import {SubscribeProvider} from './components/SubscribeContext'
export default function App() {
  return (
    <SubscribeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/flower/:id" element={< FlowerPage />} />
          <Route path="/buyflower/:id" element={<BuyFlower/>}/>
          <Route path="/hotel/:id" element={<HotelPage/>}/>
          <Route path="/bookhotel/:id" element={<Bookhotel/>}/>
          <Route path="/restaurants" element={<Allrest/>}/>
        </Routes>
      </BrowserRouter>
    </SubscribeProvider>
  );
}
