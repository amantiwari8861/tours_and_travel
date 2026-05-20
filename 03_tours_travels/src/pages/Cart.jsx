import { useSelector } from "react-redux";
import {
  ShoppingCart,
  Trash2,
  MapPin,
  CreditCard,
} from "lucide-react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-5 md:px-10 py-10">
      
      {/* Heading */}
      <div className="flex items-center gap-3 mb-10">
        <ShoppingCart className="text-sky-600" size={38} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Your Cart
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl py-20">
          <ShoppingCart
            size={80}
            className="text-gray-300 mb-6"
          />

          <h1 className="text-4xl font-bold text-gray-700 mb-3">
            Cart is Empty!
          </h1>

          <p className="text-gray-500 text-lg">
            Add your favorite travel packages now.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item, i) => (
              <CartItem item={item} key={i} />
            ))}
          </div>

          {/* Summary */}
          <div>
            <div className="sticky top-10 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Order Summary
              </h2>

              <div className="space-y-5">
                <div className="flex justify-between text-lg text-gray-600">
                  <span>Total Packages</span>
                  <span className="font-bold">
                    {cartItems.length}
                  </span>
                </div>

                <div className="flex justify-between text-lg text-gray-600">
                  <span>GST</span>
                  <span className="font-bold">Included</span>
                </div>

                <div className="border-t pt-5 flex justify-between text-2xl font-extrabold">
                  <span>Total</span>
                  <span className="text-sky-600">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              <button className="w-full mt-8 bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all duration-300">
                <CreditCard size={22} />
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

const CartItem = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
      
      <div className="grid md:grid-cols-3">
        
        {/* Image */}
        <div className="h-[250px] md:h-full">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:col-span-2 p-6 flex flex-col justify-between">
          
          <div>
            <div className="flex items-start justify-between gap-4">
              
              <div>
                <h1 className="text-3xl font-extrabold text-gray-800">
                  {item.name}
                </h1>

                <p className="flex items-center gap-2 text-gray-500 mt-2">
                  <MapPin size={18} />
                  {item.city}, {item.state}
                </p>
              </div>

              <button className="p-3 rounded-full bg-red-50 hover:bg-red-100 transition-all">
                <Trash2 className="text-red-500" size={22} />
              </button>
            </div>

            <p className="text-gray-600 leading-8 mt-5">
              {item.description}
            </p>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-8">
            
            <div>
              <p className="text-gray-500">Package Price</p>

              <h2 className="text-4xl font-extrabold text-sky-600">
                ₹{item.price}
              </h2>
            </div>

            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};