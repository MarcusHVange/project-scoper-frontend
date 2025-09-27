import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"

const StartPage = () => {
	const navigate = useNavigate()

	return (
		<div className="flex justify-center items-center w-full h-screen">
			<div className="max-w-[550px]">
				<h1 className="text-4xl font-medium mb-4 text-center font-poppins">
					Let's talk about your idea
				</h1>
				<p className="text-muted-foreground text-center text-xl">
					Check out our tutorial and learn how to get the most out of this tool. When you
					feel ready then click the start button.
				</p>
				<p className="text-muted-foreground italic mt-6 mb-8 text-center font-poppins">
					Estimated Time: 10 min.
				</p>
				<div className="flex w-full justify-center gap-6">
					<Button
						variant="default"
						className="flex-1 rounded-full cursor-pointer text-lg py-5"
						onClick={() => navigate("/scoper")}
					>
						Start
					</Button>
					<Button
						variant="outline"
						className="flex-1 rounded-full cursor-pointer text-lg py-5 border border-muted-foreground"
					>
						See tutorial
					</Button>
				</div>
			</div>
		</div>
	)
}

export default StartPage
