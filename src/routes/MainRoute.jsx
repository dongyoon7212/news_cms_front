import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import NewsPage from "../pages/NewsPage/NewsPage";

function MainRoute() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/news" element={<NewsPage />} />
			</Routes>
		</>
	);
}

export default MainRoute;
