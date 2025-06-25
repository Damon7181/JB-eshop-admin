"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          title,
          price,
          image,
          quantity: 1,
        });
      }

      state.cartCount += 1;
    },

    removeFromCartById: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i.id === itemId);
      if (existingItem) {
        state.cartCount -= existingItem.quantity;
        state.items = state.items.filter((i) => i.id !== itemId);
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((i) => i.id === itemId);
      if (item) {
        item.quantity -= 1;
        state.cartCount -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== itemId);
        }
      }
    },
    clearCart: (state) => {
      state.cartCount = 0;
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCartById, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
