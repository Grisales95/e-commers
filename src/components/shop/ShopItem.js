import { types } from "../../store/types";

const ShopItem = ({ item, dispatch }) => {
  return (
    <li>
      <div className="col-4">
        <div className="card p-2 d-flex align-items-center my-2 shadow p-3 bg-white rounded  animate__animated animate__fadeIn">
          <img src={item.img} alt={item.name} width="120px" />
          <p>{item.description}</p>

          <p>
            Precio: <span className="price">${item.totalPrice}</span>
          </p>

          <p>Cantidad: x {item.quantity} </p>
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() =>
                dispatch({
                  type: types.delete,
                  payload: item.id
                })
              }
            >
              Borrar del carrito
            </button>
            <div className="d-flex mt-2 justify-content-center">
              <button
                className="btn btn-light mr-1"
                onClick={() =>
                  dispatch({
                    type: types.sum,
                    payload: item
                  })
                }
              >
                +
              </button>
              {item.quantity > 1 && (
                <button
                  className="btn btn-light"
                  onClick={() => {
                    dispatch({
                      type: types.subtraction,
                      payload: item
                    });
                  }}
                >
                  -
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShopItem;
