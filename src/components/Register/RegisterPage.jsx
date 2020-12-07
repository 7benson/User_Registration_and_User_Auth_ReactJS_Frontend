import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

function RegisterPage() {
	const [ user, setUser ] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: ''
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.logout());
	}, []);

	function handleChange(e) {
		const { name, value } = e.target;
		setUser((user) => ({ ...user, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (user.firstName && user.lastName && user.username && user.password) {
			dispatch(userActions.register(user));
		}
		setUser({
			firstName: '',
			lastName: '',
			username: '',
			password: ''
		});
	}

	return (
		<div className="col-lg-8 offset-lg-2">
			<h2>Register</h2>
			<form name="form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="firstName"
					value={user.firstName}
					onChange={handleChange}
					label="First Name"
					required
					submitted
					username={user.firstName}
				/>
				<FormInput
					type="text"
					name="lastName"
					value={user.lastName}
					onChange={handleChange}
					label="Last Name"
					required
					submitted
					username={user.lastName}
				/>
				<FormInput
					type="text"
					name="username"
					value={user.username}
					onChange={handleChange}
					label="Username"
					required
					submitted
					username
				/>
				<FormInput
					type="password"
					name="password"
					value={user.password}
					onChange={handleChange}
					label="Password"
					required
					submitted
					username={user.password}
				/>
				<CustomButton type="submit">Register</CustomButton>
			</form>
		</div>
	);
}

export { RegisterPage };
