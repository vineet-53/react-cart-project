import React from "react";
import "./cart.scss";
import CartList from "./CartList";
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
  handleIncreaseQty = () => {
    this.setState((prevState) => ({
      qty: prevState.qty + 1,
    }));
  };
  handleDecreaseQty = () => {
    this.setState((prevState) => {
      if(prevState.qty > 1)
      return ({
      qty: prevState.qty - 1,
    })});
  };
  handleDelteQty = () => {
    const itemId  =this.state.id;
    console.log('deleting item' , itemId)
    this.props.deleteItem(itemId)
  };
  render() {
    return (
      <div className="cart-item" id={this.state.id}>
        <LeftCart imgUrl={this.state.imgUrl} />
        <RightCart details={this.state} deleteQty = {this.handleDelteQty} increaseQty = {this.handleIncreaseQty} decreaseQty = {this.handleDecreaseQty}/>
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
  const { id ,title, desc, price, qty } = props.details;
  return (
    <div className="right-item">
      <h2 className="title">{title}</h2>
      <div className="desc">{desc}</div>
      <div className="price">{price}</div>
      <div className="qty">{qty}</div>
      <div className="action-buttons">
        <button className="action-button" id="inc" onClick={props.increaseQty}>
          +
        </button>
        <button className="action-button" id="dec" onClick={props.decreaseQty}>
          -
        </button>
        <button className="action-button" id="delete" onClick={props.deleteQty}>
          delte
        </button>
      </div>
    </div>
  );
}
export default CartItem;
