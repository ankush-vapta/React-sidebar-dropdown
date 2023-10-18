import React from "react";
import { Formik } from 'formik';
import './index.css'

const validate = (values) => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Required';
	}
	if (!values.email) {
		errors.email = 'Required';
	}
	if (!values.message) {
		errors.message = 'Required';
	}
	return errors;
};

export const AboutUs = () => {
	return (
		<>
			<div className="home">
				<h1>Anywhere in your app!</h1>
			</div>
			<div className="home" >
				<Formik
					initialValues={{ email: '', password: '' }}
					validate={validate}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
						<>
							<form onSubmit={handleSubmit}	>
								<input
									type="email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
								/>
								{errors.email && touched.email && errors.email}
								<input
									type="password"
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
								{errors.password && touched.password && errors.password}
								<button type="submit" disabled={isSubmitting}>
									Submit
								</button>
							</form>
						</>
					)}
				</Formik>
			</div>
		</>
	);
};

export const OurAim = () => {
	return (
		<div className="home">
			<h1>  Aim</h1>
		</div>
	);
};

export const OurVision = () => {
	return (
		<div className="home">
			<h1>  Vision</h1>
		</div>
	);
};
