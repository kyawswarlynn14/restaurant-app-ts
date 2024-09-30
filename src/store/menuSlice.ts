import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu, IMenuState } from "../types";

const initialState: IMenuState = {
	menuList: [],
    filterList: [],
    menuDetail: null,
    isFetchingMenu: false
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenuList: (state, action: PayloadAction<IMenu[]>) => {
            state.menuList = action.payload;
        },

        setFilterList: (state, action: PayloadAction<IMenu[]>) => {
            state.filterList = action.payload;
        },

        setMenuDetail: (state, action: PayloadAction<IMenu>) => {
            state.menuDetail = action.payload;
        },

        setIsFetchingMenu: (state, action: PayloadAction<boolean>) => {
            state.isFetchingMenu = action.payload;
        }
    }
})

export const { setMenuList, setMenuDetail, setFilterList, setIsFetchingMenu } = menuSlice.actions;
export default menuSlice.reducer;
