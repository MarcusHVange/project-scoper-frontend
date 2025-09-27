import { Thread } from "@/components/thread"
import { RuntimeProvider } from "@/providers/RuntimeProvider"

const Test = () => {
	return (
		<RuntimeProvider>
			<div className="grid h-dvh px-4 py-4">
				<Thread />
			</div>
		</RuntimeProvider>
	)
}

export default Test
