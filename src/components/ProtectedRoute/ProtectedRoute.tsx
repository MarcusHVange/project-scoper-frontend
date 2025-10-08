import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/react-router"
import { Outlet } from "react-router"

const ProtectedRoute = () => {
	return (
		<>
			<SignedIn>
				<div className="absolute top-4 right-4">
					<UserButton />
				</div>
				<Outlet />
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</>
	)
}

export default ProtectedRoute
