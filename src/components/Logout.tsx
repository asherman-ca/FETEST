import { UserAuth } from '../hooks/withAuth'

const Logout = () => {
	const { logout } = UserAuth()

	return <button onClick={() => logout()}>Logout</button>
}

export default Logout
