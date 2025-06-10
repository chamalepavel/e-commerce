import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#4b2c20', color: '#fff' }}>
        <Link to="/" style={{ color: 'white' }}>Inicio</Link>
        <Link to="/finish-shop" style={{ color: 'white' }}>Carrito ({cartItems.reduce((a, c) => a + c.qty, 0)})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route path="/finish-shop" element={<Cart cartItems={cartItems} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
