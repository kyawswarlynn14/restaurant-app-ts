
export interface Menu {
    id: string;
    category: string;
    title: string;
    description: string;
    image: string;
    price: number;
}

export interface MenuState {
    menuList: Menu[];
    filterList: Menu[];
    menuDetail: Menu;
    isFetchingMenu: boolean;
}

export interface Cart extends Menu {
    quantity: number;
}

export interface CartState {
    cartList: Cart[];
}
