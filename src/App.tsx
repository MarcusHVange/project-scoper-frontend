import { BrowserRouter, Routes, Route } from "react-router"
import "./App.css"
import StartPage from "./pages/StartPage"
import ScoperPage from "./pages/ScoperPage"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/scoper" element={<ScoperPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
