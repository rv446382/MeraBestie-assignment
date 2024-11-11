import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Shop from "./pages/Shop";
import NotePad from "./pages/NotePad";
import StickyNotes from "./pages/StickyNotes";
import Planners from "./pages/Planners";
import More from "./pages/More";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/checkout/Checkout";
import PaymentPage from "./pages/checkout/PaymentPage";
import PaymentSuccess from "./pages/checkout/PaymentSuccess";

const App = () => {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/notepad" element={<NotePad />} />
        <Route path="/sticky-notes" element={<StickyNotes />} />
        <Route path="/planners" element={<Planners />} />
        <Route path="/more" element={<More />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/paymentsucc" element={<PaymentSuccess />} />
      </Routes>
    </div>

  );
};

export default App;
