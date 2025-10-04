import type { ReactNode } from "react"
import {
	AssistantRuntimeProvider,
	useLocalRuntime,
	type ChatModelAdapter,
	type ThreadMessageLike,
} from "@assistant-ui/react"

const ModelAdapter: ChatModelAdapter = {
	async *run({ messages, abortSignal }) {
		const response = await fetch("http://127.0.0.1:8000/chat/stream", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ messages }),
			signal: abortSignal,
		})

		if (!response.body) {
			throw new Error("Response body is null")
		}

		const reader = response.body.getReader()
		const decoder = new TextDecoder()
		let accumulatedText = ""

		try {
			while (true) {
				const { done, value } = await reader.read()
				if (done) break

				const chunk = decoder.decode(value, { stream: true })
				accumulatedText += chunk

				// Yield immediately after receiving each chunk
				yield {
					content: [{ type: "text", text: accumulatedText }],
				}
			}
		} finally {
			reader.releaseLock()
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
