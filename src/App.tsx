import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeForm from "./pages/ThemeForm";
import CardsForm from "./pages/CardsForm";

function App() {
	return (
		<div className="fixed top-0 left-0 h-screen w-screen bg-[#eef2ff] flex flex-col flex-1">
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<ThemeForm />} />
					<Route path="/theme" element={<ThemeForm />} />
					<Route path="/cardsForm" element={<CardsForm />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
