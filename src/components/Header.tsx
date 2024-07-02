import { useEffect, useState } from "react";
import { BiCart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setFilterList } from "../store/menuSlice";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
	const { menuList } = useSelector((state: RootState) => state.menu);
	const { cartList } = useSelector((state: RootState) => state.cart);
	const [searchText, setSearchText] = useState("");
	const cartItems = cartList.reduce((total, item) => total + item.quantity, 0)

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	
    useEffect(() => {
        const filterList = menuList.filter((i) => i.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
        dispatch(setFilterList(filterList));
    }, [searchText])

    const filterByCategory = (categoryName: string) => {
        const filterList = menuList.filter((i) => i.category === categoryName);
        dispatch(setFilterList(filterList));
		if(location.pathname !== '/') {
			navigate('/');
		}
    }

    const handleShowAllMenu = () => {
        dispatch(setFilterList(menuList));
		if(location.pathname !== '/') {
			navigate('/');
		}
    }

	return (
		<div className="sticky top-0 w-full bg-yellow-500 px-10 py-3 flex justify-between items-center">
			<div className="flex items-center gap-2">
				<h1 className="text-[25px] font-bold tracking-wider leading-8">
					Noodle Bar
				</h1>
				<input
					type="text"
					placeholder="Search..."
					className="bg-white rounded-lg py-2 px-4 focus:outline-none w-46"
					value={searchText}
					onChange={e => setSearchText(e.target.value)}
				/>
			</div>
			<div className="flex items-center gap-2">
				<button className="categoryButton" onClick={handleShowAllMenu}>All</button>
				<button className="categoryButton" onClick={() => filterByCategory("Myanmar")}>Myanmar</button>
				<button className="categoryButton" onClick={() => filterByCategory("Chinese")}>Chinese</button>
				<button className="categoryButton" onClick={() => filterByCategory("Japanese")}>Japanese</button>

				<button onClick={() => navigate('/checkout')} className="bg-white ml-2 font-bold p-2 rounded-full relative flex items-center justify-center">
					<BiCart size={20} />
					<p className="absolute bg-red-600 text-white font-semibold text-sm -top-2 -right-2 w-5 h-5 rounded-full">
						{cartItems}
					</p>
				</button>
			</div>
		</div>
	);
}

export default Header;
