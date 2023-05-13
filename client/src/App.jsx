import { useRoutes, Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import Login from './pages/Login'
import Register from './pages/Register'
import Secret from './pages/Secret'
import './App.css'

const App = () => {

  let element = useRoutes([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/secret',
      element: <Secret />
    }
  ])

  return (
    <div>

      <Navigation />

      { element }

    </div>
  )
}

export default App