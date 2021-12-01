import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { sumTotal } from "../../helpers/functions";
import { StoreContext } from "../../store/StoreProvider";

const NavBar = ({ children }) => {
  const [store] = useContext(StoreContext);

  const totalProducts = sumTotal(store, "quantity");
  return (
    <>
      <nav className="navbar navbar-ligth bg-light mb-4">
        <div className="container">
          <span className="navbar-brand">Pinturas</span>
          <NavLink to="/" className="link" activeClassName="selected">
            Home
          </NavLink>
          <NavLink
            to="/Products"
            className={(isActive) =>
              "nav-link selected" + (!isActive && " link")
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/Shop"
            className={(isActive) =>
              "nav-link selected" + (!isActive && " link")
            }
          >
            {/* Carrito ({totalProducts}) */}
            <i class="fas fa-shopping-cart"> ({totalProducts})</i>
          </NavLink>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default NavBar;
