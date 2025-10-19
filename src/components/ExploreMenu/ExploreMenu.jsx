import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore__menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore__menu-text">
        Chose from a diverse menu featuring a delectable array of dishes crafted
        with the finest ingredients and culinary expertise.Our mission is to
        satisfy your cravings and elevate your dining experience, one delicious
        meal at time.
      </p>
      <div className="explore__menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore__menu__list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="img"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
