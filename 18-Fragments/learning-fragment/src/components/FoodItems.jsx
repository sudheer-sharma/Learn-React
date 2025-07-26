import Item from "./Item";

let FoodeItem = ({ items }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foode={item} />
        ))}
      </ul>
    </>
  );
};

export default FoodeItem;
