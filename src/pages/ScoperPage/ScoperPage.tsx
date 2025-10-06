import Chat from "./components/Chat"
import Steps from "./components/Steps"

const ScoperPage = () => {
	return (
		<div className="flex h-screen overflow-hidden">
			<Steps />
			<div className="flex-1 overflow-y-auto">
                <Chat />
            </div>
		</div>
	)
}

export default ScoperPage
