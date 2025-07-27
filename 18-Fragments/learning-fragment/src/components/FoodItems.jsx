import { useState } from "react";
import Item from "./Item";

let FoodeItem = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foode={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
};

export default FoodeItem;
