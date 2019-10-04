import React from 'react';
import { login } from '../api/charts';

export default class Login extends React.Component {
	state = {
		email: '',
		password: ''
	};

	constructor(props) {
		super(props);
	}

	onSubmitHandler = (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		console.log(email, password);
		login(email, password)
			.then((user) => {
				console.log(user);
				localStorage.setItem('_access_token', user.token);
				location.replace('/home');
			})
			.catch(console.log);
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div id="home">
				<form className="form-signin" onSubmit={this.onSubmitHandler}>
					<div className="text-center mb-4">
						<img
							className="mb-4"
							src="https://avatars1.githubusercontent.com/u/30879152?s=400&v=4"
							alt=""
							width="72"
							height="72"
						/>
					</div>

					<div className="form-label-group">
						<input
							type="email"
							name="email"
							id="inputEmail"
							className="form-control"
							placeholder="Email address"
							required
							autoFocus
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<label htmlFor="inputEmail">Email address</label>
					</div>

					<div className="form-label-group">
						<input
							type="password"
							name="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<label htmlFor="inputPassword">Password</label>
					</div>

					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me
						</label>
					</div>
					<button className="btn btn-lg btn-primary btn-block" type="submit">
						Sign in
					</button>
				</form>
			</div>
		);
	}
}