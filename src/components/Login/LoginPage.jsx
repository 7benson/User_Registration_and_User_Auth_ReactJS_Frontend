import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import FormInput from '../form-input/form-input.component';
import './LoginPage.css';
import CustomButton from '../custom-button/custom-button.component';
function LoginPage() {
	const [ inputs, setInputs ] = useState({
		username: '',
		password: ''
	});
	const { username, password } = inputs;
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		dispatch(userActions.logout());
	}, []);

	function handleChange(e) {
		const { name, value } = e.target;
		setInputs((inputs) => ({ ...inputs, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (username && password) {
			const { from } = location.state || { from: { pathname: '/' } };
			dispatch(userActions.login(username, password, from));
		}
	}

	return (
		<div className="Login col-lg-8 offset-lg-2">
			<h2>Login</h2>
			<form name="form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="username"
					value={username}
					onChange={handleChange}
					label="Username"
					required
					submitted
					username
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
					submitted
					username
				/>
				<CustomButton type="submit">Submit</CustomButton>
			</form>
		</div>
	);
}

export { LoginPage };
