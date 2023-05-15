import { UserAuth } from '../hooks/withAuth'
import { useState } from 'react'
import style from './auth.module.css'
const { loginForm, authInput, authError, inputRows } = style
import { validateLogin } from '../util/validators'

const SignInForm = () => {
	const { login } = UserAuth()
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})
	const [errors, setErrors] = useState({
		username: '',
		password: '',
	})

	const onSubmit = (e: any) => {
		e.preventDefault()
		if (validateLogin(formData.username, formData.password, setErrors)) {
			return
		} else {
			login(formData.username, formData.password)
		}
	}

	const onChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<form onSubmit={onSubmit} className={`${loginForm}`}>
			<div>Login Form</div>
			<div className={`${inputRows}`}>
				<input
					className={`${authInput}`}
					required
					onChange={onChange}
					type='text'
					name='username'
				/>
				{errors.username && (
					<div className={`${authError}`}>{errors.username}</div>
				)}
				<input
					className={`${authInput}`}
					required
					onChange={onChange}
					type='password'
					name='password'
				/>
				{errors.password && (
					<div className={`${authError}`}>{errors.password}</div>
				)}
			</div>
			<button type='submit'>Login</button>
		</form>
	)
}

export default SignInForm
