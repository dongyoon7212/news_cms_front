import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";

function MainRoute() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/category" element={<CategoryPage />} />
			</Routes>
		</>
	);
}

export default MainRoute;
