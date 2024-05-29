import { useEffect, useState } from "react";
import { FaFaceAngry } from "react-icons/fa6";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";
const cartItems = [{
  productId:" adadadada",
  photo: "https://m.media-amazon.com/images/I/71-D1xCuVwL._SL1500_.jpg",
  name:"Mackbook",
  price:3000,
  quantity: 4,
  stock: 10,
},];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {

  const [couponCode,setCouponCode] = useState<string>("");
  const [isValidcouponCode,setIsValidCouponCode] = useState<boolean>(false);
  useEffect(()=>{
    const timeOutID= setTimeout(() => {
      if(Math.random()>0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return() => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
    }
  },[couponCode])
  return (
    <div className="cart">

      <main>
        {cartItems.length > 0 ? cartItems.map((i,idx) => (
          <CartItem key={idx} cartItem={i}/>
        )) : <h1>No items added</h1>
          
      }
      </main>
      <aside>
         <p>Subtotal: ₹{subtotal}</p>
         <p>ShippingCharges: ₹{shippingCharges}</p>
         <p>Tax: ₹{tax}</p>
      <p>
        Discount - <em>

        ₹{discount}
        </em></p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input type="text" placeholder="Coupon Code" value = {couponCode} onChange={(e) => setCouponCode(e.target.value)}/>
        {
          couponCode && ( isValidcouponCode? <span className="green">₹{discount} off using the <code>{couponCode}</code></span> : <span className="red">Invalid <VscError/></span>)
        }

        {
          cartItems.length> 0 && <Link to="/shipping">Checkout </Link>
        }
      </aside>
    </div>
      )
}

export default Cart
