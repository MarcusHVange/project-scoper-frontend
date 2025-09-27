import { BrowserRouter, Routes, Route } from "react-router"
import "./App.css"
import StartPage from "./pages/StartPage.tsx"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<StartPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
