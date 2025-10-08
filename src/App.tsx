import { BrowserRouter, Routes, Route } from "react-router"
import "./App.css"
import StartPage from "./pages/StartPage"
import ScoperPage from "./pages/ScoperPage"
import Test from "./pages/Test"
import { ClerkProvider } from "@clerk/react-router"
import SignInPage from "./pages/SignInPage"
import ProtectedRoute from "./components/ProtectedRoute"

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key")
}

function App() {
	return (
		<BrowserRouter>
			<ClerkProvider publishableKey={PUBLISHABLE_KEY} signInUrl="/sign-in">
				<Routes>
					<Route path="/sign-in" element={<SignInPage />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/" element={<StartPage />} />
						<Route path="/scoper" element={<ScoperPage />} />
						<Route path="/test" element={<Test />} />
					</Route>
				</Routes>
			</ClerkProvider>
		</BrowserRouter>
	)
}

export default App
