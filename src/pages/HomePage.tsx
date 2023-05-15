import SignInForm from '../components/SignInForm'
import { UserAuth } from '../hooks/withAuth'
import Logout from '../components/Logout'
import style from './home.module.css'
const { homePage } = style

const HomePage = () => {
	const { loggedIn } = UserAuth()

	return (
		<div className={`${homePage}`}>
			{loggedIn ? <Logout /> : <SignInForm />}
		</div>
	)
}

export default HomePage
