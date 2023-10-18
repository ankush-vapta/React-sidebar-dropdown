import React, { createContext, useCallback, useState } from 'react';
import MultiStepForm from '../../pages/MultiStepForm';

const FORM_STATE = {
	selectedIndex: 0,
	steps: {
		details: {
			valid: false,
			dirty: false,
			value: {
				name: '',
				dueDate: '',
			},
		},
		preferences: {
			valid: false,
			dirty: false,
			value: {
				receiveEmails: false,
				receiveNotifications: false,
			},
		},
	},
};

const FORM_STEPS = [
	{ label: `Details`, },
	{ label: `Preferences`, },
	{ label: `Complete`, },
];
export const FormStateContext = createContext({
	form: FORM_STATE,
	setForm: (form) => { },
});

const CreateTaskMultiStepFormContainer = ({ children }) => {
	const [form, setForm] = useState(FORM_STATE);

	const onComplete = useCallback((state) => {

	}, []);

	return (

		<FormStateContext.Provider value={{
			form,
			setForm
		}}>
			{children}
		</FormStateContext.Provider>
	);
}
export default CreateTaskMultiStepFormContainer;

/******************************************
*                                         *      
*  Context API functions & working Flow   *          
*                                         *        
******************************************/     

// import React, { createContext, useState } from 'react';

// export const MyContext = createContext("");

// const ContextApi = ({ children }) => {
// 	const [text, setText] = useState("");
// 	return (
// 		<MyContext.Provider value={{ text, setText }}>
// 			{children}
// 		</MyContext.Provider>
// 	);
// }

// export default ContextApi;



