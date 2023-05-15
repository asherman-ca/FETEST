import { createContext, useContext, useState } from 'react'

const users = [{ username: 'admin', password: 'admin' }]

export const AuthContext = createContext({} as any)

export function AuthProvider({ children }: any) {
	const [loggedIn, setLoggedIn] = useState(false)

	const login = (username: string, password: string) => {
		if (
			users.find(
				(user) => user.username === username && user.password === password
			)
		) {
			setLoggedIn(true)
		} else {
			alert('Invalid username or password')
		}
	}

	const logout = () => {
		setLoggedIn(false)
	}

	return (
		<AuthContext.Provider value={{ logout, login, loggedIn }}>
			{children}
		</AuthContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(AuthContext)
}
