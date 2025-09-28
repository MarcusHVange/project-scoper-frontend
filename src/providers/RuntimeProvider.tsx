import type { ReactNode } from "react"
import {
	AssistantRuntimeProvider,
	useLocalRuntime,
	type ChatModelAdapter,
	type ThreadMessageLike,
} from "@assistant-ui/react"

const ModelAdapter: ChatModelAdapter = {
	async run({ messages, abortSignal }) {
		// TODO replace with your own API
		const result = await fetch("http://127.0.0.1:8000/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			// forward the messages in the chat to the API
			body: JSON.stringify({
				messages,
			}),
			// if the user hits the "cancel" button or escape keyboard key, cancel the request
			signal: abortSignal,
		})

		const data = await result.json()
		return {
			content: [
				{
					type: "text",
					text: data.text,
				},
			],
		}
	},
}

const initialMessage: ThreadMessageLike = {
	id: "initial-message",
	role: "assistant",
	content: [
		{
			type: "text",
			text: "Hello. Let’s explore your idea together. Please give me an introduction to the project that you have in mind.",
		},
	],
	createdAt: new Date(),
}

export function RuntimeProvider({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	const runtime = useLocalRuntime(ModelAdapter, {
		initialMessages: [initialMessage],
	})

	return <AssistantRuntimeProvider runtime={runtime}>{children}</AssistantRuntimeProvider>
}
