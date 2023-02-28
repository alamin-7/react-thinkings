import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartSate = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    const updateItem = state.items.concat(action.item);
    const updateTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

    return{
        items: updateItem,
        totalAmount: updateTotalAmount
    }
}

const CartProvider = (props) => {


    const [cartSate, dispatchCartAction] = useReducer(cartReducer, defaultCartSate);
    
    const addItemsHandler = item => {
        dispatchCartAction({type:'ADD', item:item});
    };

    const removeItemHandler = id => {
        dispatchCartAction({type:'REMOVE', id:id});
    }; 

    const cartContext = {
        items: cartSate.items,
        totalAmount: cartSate.totalAmount,
        addItems: addItemsHandler,
        removeItems: removeItemHandler
    }

    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )
}

export default CartProvider;