import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Cart } from "../types";
import {
	increaseQuantity,
	decreaseQuantity,
	setCartList,
} from "../store/cartSlice";
import { BiMinus, BiPlus } from "react-icons/bi";

const Checkout: React.FC = () => {
	const { cartList } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();

	const totalPrice = cartList?.length && cartList.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div className="w-full h-full">
			<div className="mb-2 w-fit mx-auto flex items-center gap-2">
				<h2 className="text-2xl font-bold">Checkout</h2>
				<button
					onClick={() => dispatch(setCartList([]))}
					className="p-2 rounded-lg bg-white font-semibold"
				>
					Clear cart
				</button>
			</div>
			{cartList.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div className="w-full lg:w-[70%] mx-auto">
					<ul className="">
						{cartList.map((item: Cart) => (
							<li
								key={item.id}
								className="flex justify-between items-center mb-2 border-b border-gray-700"
							>
								<div className="flex items-center">
									<img
										src={item.image}
										alt={item.title}
										className="w-16 h-16 object-cover mr-4"
									/>
									<div>
										<h3 className="text-lg font-semibold">{item.title}</h3>
										<div className="flex items-center">
											<button
												className="bg-gray-300 text-gray-800 p-1 rounded-md"
												onClick={() => dispatch(decreaseQuantity(item.id))}
											>
												<BiMinus size={20} />
											</button>
											<p className="mx-2 font-bold">{item.quantity}</p>
											<button
												className="bg-gray-300 text-gray-800 p-1 rounded-md"
												onClick={() => dispatch(increaseQuantity(item.id))}
											>
												<BiPlus size={20} />
											</button>
										</div>
										<p className="text-gray-600">
											Price: ${item.price.toFixed(2)}
										</p>
									</div>
								</div>
								<div className="text-right">
									<p className="text-lg font-semibold">
										${(item.price * item.quantity).toFixed(2)}
									</p>
								</div>
							</li>
						))}
					</ul>

					<div className="total-price mt-4 flex justify-end items-center">
						<h3 className="text-xl font-bold">
							Total: ${totalPrice.toFixed(2)}
						</h3>
					</div>
					<div className="checkout-actions mt-6 flex justify-end">
						<button className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold">
							Proceed to Payment
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Checkout;
