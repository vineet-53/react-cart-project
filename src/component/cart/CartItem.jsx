import React from "react";
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
        <LeftCart imgUrl = {this.state.imgUrl} />
        <RightCart details={this.state} />
      </div>
    );
  }
}
function LeftCart({imgUrl}) {
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
      <h1 className="title">{title}</h1>
      <div className="desc">{desc}</div>
      <div className="price">{price}</div>
      <div className="qty">{qty}</div>
    </div>
  );
}
export default CartItem;