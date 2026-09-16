"use client";

import { CartItem } from "@/types/product";

import { Product } from "@/types/product";


interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; id: number };


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