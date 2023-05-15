export const validateLogin = (
	username: string,
	password: string,
	setErrors: any
) => {
	let foundError = false
	if (username.length < 3) {
		setErrors((prev) => ({
			...prev,
			username: 'Username must be 3 characters',
		}))
		foundError = true
	}
	if (!password) {
		// setErrors('Password is required')
		foundError = true
	}
	return foundError
}
