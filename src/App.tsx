import { BrowserRouter, Routes, Route } from "react-router"
import "./App.css"
import StartPage from "./pages/StartPage"
import ScoperPage from "./pages/ScoperPage"
import Test from "./pages/Test"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/scoper" element={<ScoperPage />} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
