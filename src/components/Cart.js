import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearcart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearcart = () => {
    dispatch(clearcart());
  };
  return (
    <div>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-7/12 m-auto">
          <button
            className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={handleClearcart}
          >
            Clear cart
          </button>
          {cartItems.length===0 && <h1 className="font-mono text-xl">Cart is empty, Add items to the Cart!</h1>}
          <ItemList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
