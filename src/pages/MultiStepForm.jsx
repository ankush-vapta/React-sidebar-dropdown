import React, { useContext, useCallback } from 'react'
import './index.css'
import { FormStateContext } from '../components/context/context'
import { produce } from 'immer'
import { Tab } from '@mui/material'

const MultiStepForm = () => {
	const { form, setForm } = useContext(FormStateContext);

	const handleToggleNext = useCallback((id) => {
		setForm(
			produce((form) => {
				const todo = form.selectedIndex += 1
				console.log(todo, "================================")
			})
		);
	}, [setForm]);

	const handleTogglePrevious = useCallback((id) => {
		setForm(
			produce((form) => {
				const todo = form.selectedIndex += 1
				console.log(todo, "================================")
			})
		);
	}, [setForm]);

	const setSelectedIndex = useCallback(
		(index) => {
			setForm(
				produce((form) => {
					form.selectedIndex = index;
				})
			);
		},
		[setForm]);

	return (
		<div className="services">
			<h1>Multi-Step-Form</h1>
			<div>
				<Tab.Group selectedIndex={selectedIndex}>
					<Tab.List className={'Stepper mb-6'}>
						{FORM_STEPS.map((step, index) => {
							const canSelectStep = Object.values(form.steps)
								.slice(0, index)
								.every((step) => step.valid && !step.dirty);

							return (
								<StepperItem
									key={index}
									className={classNames({
										['CompletedStep']: index < selectedIndex,
										['StepperStepActionable']: canSelectStep,
									})}
									step={index + 1}
									onSelect={() => {
										if (canSelectStep) {
											setSelectedIndex(index);
										}
									}}
								>
									{step.label}
								</StepperItem>
							);
						})}
					</Tab.List>

					<Tab.Panels>
						<Tab.Panel>
							Here we will add the Details Form
						</Tab.Panel>

						<Tab.Panel>
							Here we will add the Preferences Form
						</Tab.Panel>

						<Tab.Panel>
							Here goes the last step
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	)
}

export default MultiStepForm;