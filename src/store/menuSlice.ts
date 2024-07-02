import { createSlice } from "@reduxjs/toolkit";
import { MenuState } from "../types";

const initialState: MenuState = {
	menuList: [],
    filterList: [],
    menuDetail: null,
    isFetchingMenu: false
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenuList: (state, {payload}) => {
            state.menuList = payload;
        },

        setFilterList: (state, {payload}) => {
            state.filterList = payload;
        },

        setMenuDetail: (state, {payload}) => {
            state.menuDetail = payload;
        },

        setIsFetchingMenu: (state, {payload}) => {
            state.isFetchingMenu = payload;
        }
    }
})

export const { setMenuList, setMenuDetail, setFilterList, setIsFetchingMenu } = menuSlice.actions;
export default menuSlice.reducer;
