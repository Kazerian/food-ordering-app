import React, { useState } from "react";
import CartProvider from "./store/CartProvider";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  return (
    <CartProvider>
      <Header onCartClick={() => setCartVisible(true)} />
      {cartVisible && (
        <Cart
          onClose={() => {
            setCartVisible(false);
          }}
        />
      )}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
