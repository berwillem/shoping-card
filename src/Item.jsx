const Item = ({ id, name, price, quantity, onRemove }) => {
  return (
    <div>
      <p>
        {name} - ${price} x {quantity}
      </p>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default Item;
