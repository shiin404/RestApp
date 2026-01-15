import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/MainPage/Home";
import Profile from "./components/Profile/Profile";
import BookingPage from "./components/Restaurant/BookingPage"
import RestaurantPage from './components/Restaurant/RestaurantPage'
import FlowerPage from './components/Flower/FlowerPage'
import BuyFlower from './components/Flower/BuyFlower'
import HotelPage from './components/Hotel/HotelPage'
import Bookhotel from './components/Hotel/Bookhotel'
import Allrest from './components/Allplace/Allrest'
import Allhotel from './components/Allplace/Allhotel'
import Allflowers from './components/Allplace/Allflowers'
import Header from "./components/MainPage/Header"
import DownloadApp from "./components/MainPage/DownloadApp"
import {SubscribeProvider} from './components/AllData/SubscribeContext'
export default function App() {
  return (
    <SubscribeProvider>
      <BrowserRouter>
        <Header />
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
          <Route path="/hotels" element={<Allhotel/>}/>
          <Route path="/flowers" element={<Allflowers/>}/>
          <Route path="/app" element={<DownloadApp/>}/>
        </Routes>
      </BrowserRouter>
    </SubscribeProvider>
  );
}
