import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types";

const initialState: CartState = {
	cartList: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCartList: (state, { payload }) => {
			state.cartList = payload;
		},

		addToCart: (state, { payload }) => {
			const id = payload?.id;
			const menu = state.cartList.find((i) => i.id === id);
			if (menu) {
				menu.quantity += 1;
			} else {
				state.cartList.push({ ...payload, quantity: 1 });
			}
		},

		increaseQuantity: (state, { payload }) => {
			const menu = state.cartList.find((i) => i.id === payload);
			if (menu) {
				menu.quantity += 1;
			}
		},

		decreaseQuantity: (state, { payload }) => {
			const menu = state.cartList.find((i) => i.id === payload);
			if (menu && menu.quantity > 1) {
				menu.quantity -= 1;
			} else {
                state.cartList = state.cartList.filter(i => i.id !== payload);
            }
		},
	},
});

export const { setCartList, addToCart, increaseQuantity, decreaseQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
