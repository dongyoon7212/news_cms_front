import PageLayout from "./components/PageLayout/PageLayout";
import SideBar from "./components/SideBar/SideBar";
import MainRoute from "./routes/MainRoute";

function App() {
	return (
		<PageLayout>
			<SideBar></SideBar>
			<MainRoute></MainRoute>
		</PageLayout>
	);
}

export default App;
