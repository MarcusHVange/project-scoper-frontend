import { Thread } from "@/components/thread"
import { RuntimeProvider } from "@/providers/RuntimeProvider"

const Chat = () => {
	return (
		<RuntimeProvider>
			<div className="grid w-full h-dvh px-4 pt-16">
				<Thread title="What is your project idea?" />
			</div>
		</RuntimeProvider>
	)
}

export default Chat
