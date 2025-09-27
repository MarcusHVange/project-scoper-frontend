import Step from "./components/Step"
import { STEPDATA } from "./util/stepData"

const Steps = () => {
	return (
		<div className="h-screen ml-10">
			<div className="flex flex-col justify-between h-full py-18 border-l border-muted-foreground">
				{STEPDATA.map((step) => (
					<Step key={step.title} title={step.title} active={step.active} />
				))}
			</div>
		</div>
	)
}

export default Steps
