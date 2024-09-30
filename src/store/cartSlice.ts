import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartState, IMenu } from "../types";

const initialState: ICartState = {
	cartList: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCartList: (state, action: PayloadAction<ICart[]>) => {
			state.cartList = action.payload;
		},

		addToCart: (state, action: PayloadAction<IMenu>) => {
			const id = action.payload?.id;
			const menu = state.cartList.find((i) => i.id === id);
			if (menu) {
				menu.quantity += 1;
			} else {
				state.cartList.push({ ...action.payload, quantity: 1 });
			}
		},

		increaseQuantity: (state, action: PayloadAction<string>) => {
			const menu = state.cartList.find((i) => i.id === action.payload);
			if (menu) {
				menu.quantity += 1;
			}
		},

		decreaseQuantity: (state, action: PayloadAction<string>) => {
			const menu = state.cartList.find((i) => i.id === action.payload);
			if (menu && menu.quantity > 1) {
				menu.quantity -= 1;
			} else {
                state.cartList = state.cartList.filter(i => i.id !== action.payload);
            }
		},
	},
});

export const { setCartList, addToCart, increaseQuantity, decreaseQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
