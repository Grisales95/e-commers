const ItemModal = ({ item }) => {
  return (
    <li className="text-center px-4 py-1">
      {item.description} x {item.quantity}{" "}
      <span className="price">${item.totalPrice}</span>
      <hr />
    </li>
  );
};

export default ItemModal;
