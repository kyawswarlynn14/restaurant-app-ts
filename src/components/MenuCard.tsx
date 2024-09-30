import { MouseEvent } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMenu } from "../types";
import { setMenuDetail } from "../store/menuSlice";
import { addToCart } from "../store/cartSlice";

function MenuCard({ menu }: {menu: IMenu}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

	const handleGoToDetails = () => {
		dispatch(setMenuDetail(menu));
		navigate("/details");
	};

	const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		dispatch(addToCart(menu));
	};

	return (
		<div
			onClick={handleGoToDetails}
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
					onClick={handleAddToCart}
					className="p-1 rounded-full border border-gray-700 "
				>
					<BiPlus size={25} />
				</button>
			</div>
		</div>
	);
}

export default MenuCard;
