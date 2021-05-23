import React, { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  return (
    <>
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
    </>
  );
}

export default App;
