"use client";

import { CartItem } from "@/types/product";

import { Product } from "@/types/product";
import { createContext, useContext, useReducer } from "react";

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; id: number }


interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
    const existing = state.items.find((item) => item.id === action.product.id);

    if (existing) {
        const nuevosItems = state.items.map((item) => {
        if (item.id === existing.id) {
            const copia = { ...item };
            copia.quantity = copia.quantity + 1;
            return copia;
        } else {
            return item;
        }
        });
        return { items: nuevosItems };
    } else {
        const newItem: CartItem = {
        id: action.product.id,
        title: action.product.title,
        price: action.product.price,
        thumbnail: action.product.thumbnail,
        quantity: 1,
        };
        return { items: [...state.items, newItem] };
      }
    }
    case "REMOVE_ITEM": {
      return {
        items: state.items.filter((item) => item.id !== action.id),
      };
    }
    default:
      return state;
  }
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un <CartProvider>");
  }
  return context;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const value: CartContextValue = {
    items: state.items,
    totalItems: totalItems,
    addItem: (product) => dispatch({ type: "ADD_ITEM", product }),
    removeItem: (id) => dispatch({ type: "REMOVE_ITEM", id }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

