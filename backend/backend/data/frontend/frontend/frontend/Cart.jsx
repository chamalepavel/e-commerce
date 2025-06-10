function Cart({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Resumen de compra</h2>
      {cartItems.length === 0 && <p>No hay productos en el carrito.</p>}
      {cartItems.map((item) => (
        <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
          <h3>{item.title}</h3>
          <p>Cantidad: {item.qty}</p>
          <p>Subtotal: ${item.qty * item.price}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button style={{ marginTop: '1rem' }}>Pagar ahora</button>
    </div>
  );
}

export default Cart;
