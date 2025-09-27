import { cn } from "@/lib/utils"

interface StepProps {
	title: string
	active: boolean
}

const Step = ({ title, active = false }: StepProps) => {
	return (
		<div className="flex gap-2 items-center translate-x-[-4.75%]">
			<div
				className={cn(
					"w-8 h-8 border border-muted-foreground rounded-full bg-white",
					active && "bg-muted-foreground",
				)}
			></div>
			<div
				className={cn(
					"w-[300px] text-[14px] text-black/80 font-poppins border border-muted-foreground py-1.5 px-3 rounded-full",
					active && "bg-muted-foreground text-white",
				)}
			>
				{title}
			</div>
		</div>
	)
}

export default Step
