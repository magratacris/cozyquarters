import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuid } from "uuid";
const Context = createContext();

export const StateContext = ({ children }) => {
  //*states//////////////////////////
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterData, setFilterData] = useState([]);
  //uuid
  //navigation panel(mobile)
  const [navPanActive, setNavPanActive] = useState(false);
  //*variables////////////////////////
  let foundProduct;
  let index;
  //adding items in the cart in inserting 'quantity' property in each item
  //*functions methods-------------------------------
  const onAdd = (product, quantity) => {
    //existing item////////
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }

        {
          return cartProduct;
        }
      });
      //update the cartItem
      setCartItems(updatedCartItems);
    } else {
      //new item////////
      //set quantity property in newly added item
      product.quantity = quantity;
      //update the cartItem
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);
    if (value === "inc") {
      // setCartItems([
      //   ...newCartItems,
      //   { ...foundProduct, quantity: foundProduct.quantity + 1 },
      // ]);
      //so the selected item will not move from its declared index
      newCartItems.splice(index, 0, {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      });
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        newCartItems.splice(index, 0, {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        });
        // setCartItems([
        //   ...newCartItems,
        //   { ...foundProduct, quantity: foundProduct.quantity - 1 },
        // ]);
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };
  //remove items from cart
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };
  //filter in /furnitures page
  const filterProcess = (item, products) => {
    if (item === "All") {
      setActiveFilter("All");
      setFilterData(products);
    } else {
      setActiveFilter(item);
      const filteredWithNewId = products.map((product) => {
        return {
          ...product,
          _id: uuid(),
        };
      });
      const filtered = filteredWithNewId.filter((product) =>
        product.filters.includes(item)
      );
      setFilterData(filtered);
    }
  };

  //*quantity buttons//////////////////////////
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        filterProcess,
        setFilterData,
        filterData,
        activeFilter,
        setActiveFilter,
        navPanActive,
        setNavPanActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
