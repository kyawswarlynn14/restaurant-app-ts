import { MouseEvent } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Menu } from "../types";
import { RootState } from "../store";
import { setMenuDetail } from "../store/menuSlice";
import { addToCart } from "../store/cartSlice";

function MenuCard({ menu }: {menu: Menu}) {
    const { filterList } = useSelector((state: RootState) => state.menu);
    const dispatch = useDispatch();
    const navigate = useNavigate();

	const handleGoToDetails = (id: string) => {
		const menu = filterList.find((i) => i.id === id);
		dispatch(setMenuDetail(menu));
		navigate("/details");
	};

	const handleAddToCart = (e: MouseEvent<HTMLButtonElement>, id: string) => {
		e.stopPropagation();
		const menu = filterList.find((i) => i.id === id);
		dispatch(addToCart(menu));
	};

	return (
		<div
			onClick={() => handleGoToDetails(menu.id)}
			className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
		>
			<img
				src={menu.image}
				alt="menu"
				className="w-full h-52 object-cover rounded-t-lg"
			/>
			<div className="flex items-center justify-between p-2">
				<div>
					<p className="text-lg font-medium">{menu.title}</p>
					<p className="font-medium text-yellow-500">Price - ${menu.price}</p>
				</div>

				<button
					onClick={(e) => handleAddToCart(e, menu.id)}
					className="p-1 rounded-full border border-gray-700 "
				>
					<BiPlus size={25} />
				</button>
			</div>
		</div>
	);
}

export default MenuCard;
