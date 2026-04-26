"use client";
import { createContext, useContext, useReducer, useCallback, ReactNode } from "react";
import { Producto } from "@/config";

export type CartItem = {
  producto: Producto;
  cantidad: number;
  varianteLabel?: string;
  variantePrecio?: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

type CartAction =
  | { type: "ADD"; producto: Producto; varianteLabel?: string; variantePrecio?: number }
  | { type: "REMOVE"; id: string; varianteLabel?: string }
  | { type: "INCREMENT"; id: string; varianteLabel?: string }
  | { type: "DECREMENT"; id: string; varianteLabel?: string }
  | { type: "TOGGLE_OPEN" }
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "CLEAR" };

function cartKey(id: string, varianteLabel?: string) {
  return varianteLabel ? `${id}__${varianteLabel}` : id;
}

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const key = cartKey(action.producto.id, action.varianteLabel);
      const exists = state.items.find(
        (i) => cartKey(i.producto.id, i.varianteLabel) === key
      );
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            cartKey(i.producto.id, i.varianteLabel) === key
              ? { ...i, cantidad: i.cantidad + 1 }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            producto: action.producto,
            cantidad: 1,
            varianteLabel: action.varianteLabel,
            variantePrecio: action.variantePrecio,
          },
        ],
      };
    }
    case "INCREMENT": {
      const key = cartKey(action.id, action.varianteLabel);
      return {
        ...state,
        items: state.items.map((i) =>
          cartKey(i.producto.id, i.varianteLabel) === key
            ? { ...i, cantidad: i.cantidad + 1 }
            : i
        ),
      };
    }
    case "DECREMENT": {
      const key = cartKey(action.id, action.varianteLabel);
      return {
        ...state,
        items: state.items
          .map((i) =>
            cartKey(i.producto.id, i.varianteLabel) === key
              ? { ...i, cantidad: i.cantidad - 1 }
              : i
          )
          .filter((i) => i.cantidad > 0),
      };
    }
    case "REMOVE": {
      const key = cartKey(action.id, action.varianteLabel);
      return {
        ...state,
        items: state.items.filter(
          (i) => cartKey(i.producto.id, i.varianteLabel) !== key
        ),
      };
    }
    case "TOGGLE_OPEN": return { ...state, isOpen: !state.isOpen };
    case "OPEN":  return { ...state, isOpen: true };
    case "CLOSE": return { ...state, isOpen: false };
    case "CLEAR": return { ...state, items: [] };
    default: return state;
  }
}

type CartContextType = {
  state: CartState;
  addItem: (producto: Producto, varianteLabel?: string, variantePrecio?: number) => void;
  removeItem: (id: string, varianteLabel?: string) => void;
  increment: (id: string, varianteLabel?: string) => void;
  decrement: (id: string, varianteLabel?: string) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  total: number;
  totalItems: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false });

  const addItem = useCallback(
    (producto: Producto, varianteLabel?: string, variantePrecio?: number) =>
      dispatch({ type: "ADD", producto, varianteLabel, variantePrecio }),
    []
  );
  const removeItem = useCallback(
    (id: string, varianteLabel?: string) => dispatch({ type: "REMOVE", id, varianteLabel }),
    []
  );
  const increment = useCallback(
    (id: string, varianteLabel?: string) => dispatch({ type: "INCREMENT", id, varianteLabel }),
    []
  );
  const decrement = useCallback(
    (id: string, varianteLabel?: string) => dispatch({ type: "DECREMENT", id, varianteLabel }),
    []
  );
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE_OPEN" }), []);
  const openCart   = useCallback(() => dispatch({ type: "OPEN" }), []);
  const closeCart  = useCallback(() => dispatch({ type: "CLOSE" }), []);
  const clearCart  = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const total = state.items.reduce((acc, i) => {
    const precio = i.variantePrecio ?? i.producto.precio;
    return acc + precio * i.cantidad;
  }, 0);

  const totalItems = state.items.reduce((acc, i) => acc + i.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, increment, decrement, toggleCart, openCart, closeCart, clearCart, total, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
