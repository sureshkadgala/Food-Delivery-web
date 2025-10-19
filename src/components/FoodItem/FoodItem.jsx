import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
  // use useContext to consume StoreContext
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food__item">
      <div className="food__item__img-container">
        <img src={image} alt="img" className="food__item-img" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="img"
          />
        ) : (
          <div className="food__item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="img"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="img"
            />
          </div>
        )}
      </div>
      <div className="food__item-info">
        <div className="food__item__name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="img" />
        </div>
        <p className="food__item-desc">{description}</p>
        <p className="food__item-price"> ${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
