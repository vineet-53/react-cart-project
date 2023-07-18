import React from "react";
import CartItem from "./CartItem";
export default function CartList() {
  let itemList = [
    {
      id: 1,
      title: "I phone 14pro",
      desc: "phone",
      price: "$40",
      qty: 1,
      imgUrl: "img/phone.jpg",
    },
    {
      id: 2,
      title: "hair product",
      desc: "hair-drier",
      price: "$20",
      qty: 1,
      imgUrl: "img/hair-drier.jpg",
    },
    {
      id: 3,
      title: "washing machine",
      desc: "washing machine",
      price: "$240",
      qty: 1,
      imgUrl: "img/washing-machine.jpg",
    },
    {
      id: 4,
      title: "something",
      desc: "clothes",
      price: "$140",
      qty: 1,
      imgUrl: "img/clothes.jpg",
    },
  ];
  return (
    <React.Fragment>
      {itemList.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </React.Fragment>
  );
}
