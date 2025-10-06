import { Thread } from "@/components/thread"
import { RuntimeProvider } from "@/providers/RuntimeProvider"

const Chat = () => {
	return (
		<RuntimeProvider>
			<div className="h-full *:overflow-hidden pt-10">
				<Thread title="What is your project idea?" />
			</div>
		</RuntimeProvider>
	)
}

export default Chat
