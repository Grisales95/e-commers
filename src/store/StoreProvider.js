import { createContext, useReducer } from "react";
import storeReducer from "./StoreReducer";

const StoreContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem("shop-products")) || [];
};
const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, [], init);
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
export { StoreContext };
