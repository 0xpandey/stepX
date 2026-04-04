"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";
import type { Product, CartItem, WishlistItem, User } from "./data";
import { mockUser } from "./data";

// State Types
interface StoreState {
  cart: CartItem[];
  wishlist: WishlistItem[];
  user: User | null;
  isCartOpen: boolean;
  isMenuOpen: boolean;
}

// Action Types
type StoreAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "UPDATE_CART_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "ADD_TO_WISHLIST"; payload: WishlistItem }
  | { type: "REMOVE_FROM_WISHLIST"; payload: string }
  | { type: "MOVE_TO_CART"; payload: string }
  | { type: "SET_USER"; payload: User | null }
  | { type: "TOGGLE_CART"; payload?: boolean }
  | { type: "TOGGLE_MENU"; payload?: boolean }
  | { type: "HYDRATE"; payload: Partial<StoreState> };

// Initial State
const initialState: StoreState = {
  cart: [],
  wishlist: [],
  user: mockUser, // Using mock user for demo
  isCartOpen: false,
  isMenuOpen: false,
};

// Reducer
function storeReducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingIndex = state.cart.findIndex(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor
      );

      if (existingIndex > -1) {
        const newCart = [...state.cart];
        newCart[existingIndex].quantity += action.payload.quantity;
        return { ...state, cart: newCart };
      }

      return { ...state, cart: [...state.cart, action.payload] };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case "UPDATE_CART_QUANTITY": {
      const newCart = state.cart.map((item) =>
        item.product.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );
      return { ...state, cart: newCart };
    }

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "ADD_TO_WISHLIST": {
      const exists = state.wishlist.some(
        (item) => item.product.id === action.payload.product.id
      );
      if (exists) return state;
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.product.id !== action.payload
        ),
      };

    case "MOVE_TO_CART": {
      const wishlistItem = state.wishlist.find(
        (item) => item.product.id === action.payload
      );
      if (!wishlistItem) return state;

      const cartItem: CartItem = {
        product: wishlistItem.product,
        quantity: 1,
        selectedSize: wishlistItem.selectedSize || wishlistItem.product.sizes[0]?.size || "9",
        selectedColor: wishlistItem.selectedColor || wishlistItem.product.colors[0]?.name || "",
      };

      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.product.id !== action.payload
        ),
        cart: [...state.cart, cartItem],
      };
    }

    case "SET_USER":
      return { ...state, user: action.payload };

    case "TOGGLE_CART":
      return {
        ...state,
        isCartOpen: action.payload ?? !state.isCartOpen,
      };

    case "TOGGLE_MENU":
      return {
        ...state,
        isMenuOpen: action.payload ?? !state.isMenuOpen,
      };

    case "HYDRATE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

// Context
const StoreContext = createContext<{
  state: StoreState;
  dispatch: React.Dispatch<StoreAction>;
  cartTotal: number;
  cartCount: number;
} | null>(null);

// Provider Component
export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Hydrate state from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("stepx-cart");
    const savedWishlist = localStorage.getItem("stepx-wishlist");

    if (savedCart || savedWishlist) {
      dispatch({
        type: "HYDRATE",
        payload: {
          cart: savedCart ? JSON.parse(savedCart) : [],
          wishlist: savedWishlist ? JSON.parse(savedWishlist) : [],
        },
      });
    }
  }, []);

  // Persist cart and wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("stepx-cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("stepx-wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  // Computed values
  const cartTotal = state.cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartCount = state.cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <StoreContext.Provider value={{ state, dispatch, cartTotal, cartCount }}>
      {children}
    </StoreContext.Provider>
  );
}

// Custom Hook
export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}

// Helper hooks for common operations
export function useCart() {
  const { state, dispatch, cartTotal, cartCount } = useStore();

  const addToCart = (
    product: Product,
    quantity: number,
    selectedSize: string,
    selectedColor: string
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity, selectedSize, selectedColor },
    });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({
      type: "UPDATE_CART_QUANTITY",
      payload: { id: productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return {
    cart: state.cart,
    cartTotal,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
}

export function useWishlist() {
  const { state, dispatch } = useStore();

  const addToWishlist = (product: Product, selectedSize?: string, selectedColor?: string) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: { product, selectedSize, selectedColor },
    });
  };

  const removeFromWishlist = (productId: string) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };

  const moveToCart = (productId: string) => {
    dispatch({ type: "MOVE_TO_CART", payload: productId });
  };

  const isInWishlist = (productId: string) => {
    return state.wishlist.some((item) => item.product.id === productId);
  };

  return {
    wishlist: state.wishlist,
    addToWishlist,
    removeFromWishlist,
    moveToCart,
    isInWishlist,
  };
}
