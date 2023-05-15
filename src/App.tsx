import { AuthProvider } from './hooks/withAuth'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
	return (
		<>
			<AuthProvider>
				<HomePage />
			</AuthProvider>
		</>
	)
}

export default App
