import { Route, Routes } from "react-router-dom";
import {
	AppIndex,
	AppStarter,
	Checkout,
	MenuDetails,
	PageNotFound,
} from "./pages";

function App() {
	return (
		<Routes>
			<Route path="/" element={<AppStarter />}>
				<Route path="" index={true} element={<AppIndex />} />
				<Route path="/details" element={<MenuDetails />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="*" element={<PageNotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
