import "./Cart.css";
function Cart(props) {
  return <div className={`Cart ${props.className}`}>{props.children}</div>;
}
export default Cart;
