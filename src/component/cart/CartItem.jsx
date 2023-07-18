import React from "react";
import "./cart.scss";
class CartItem extends React.Component {
  constructor(props) {
    const { id, price, desc, title, qty, imgUrl } = props.item;
    super(props);
    this.state = {
      id: id,
      title: title,
      desc: desc,
      price: price,
      qty: qty,
      imgUrl: imgUrl,
    };
  }
  render() {
    return (
      <div className="cart-item" id={this.state.id}>
        <LeftCart imgUrl={this.state.imgUrl} />
        <RightCart details={this.state} />
      </div>
    );
  }
}
function LeftCart({ imgUrl }) {
  return (
    <div className="left-item">
      <img src={imgUrl} alt="phone photo" />
    </div>
  );
}
function RightCart(props) {
  const { title, desc, price, qty } = props.details;
  return (
    <div className="right-item">
      <h2 className="title">{title}</h2>
      <div className="desc">{desc}</div>
      <div className="price">{price}</div>
      <div className="qty">{qty}</div>
      <div className="action-buttons">
        <button className="action-button" id="inc">+</button>
        <button className="action-button" id="dec">-</button>
        <button className="action-button" id="delete">delte</button>
      </div>
    </div>
  );
}
export default CartItem;
