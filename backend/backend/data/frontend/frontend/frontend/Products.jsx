import { useEffect, useState } from 'react';

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '1rem', background: '#fff' }}>
          <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
