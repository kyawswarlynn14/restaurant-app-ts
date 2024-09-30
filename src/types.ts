
export interface IMenu {
    id: string;
    category: string;
    title: string;
    description: string;
    image: string;
    price: number;
}

export interface IMenuState {
    menuList: IMenu[];
    filterList: IMenu[];
    menuDetail: IMenu | null;
    isFetchingMenu: boolean;
}

export interface ICart extends IMenu {
    quantity: number;
}

export interface ICartState {
    cartList: ICart[];
}
