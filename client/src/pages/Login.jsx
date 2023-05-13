import { useState } from 'react'
import UsersAPI from '../services/UsersAPI'

const Login = () => {
    const [user, setUser] = useState({emailaddress: '', password: ''})
    
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    




    return (

        <form>

            <label htmlFor='emailaddress'>Email Address</label>
            <input
                type='email'
                id='emailaddress'
                name='emailaddress'
                placeholder='Email address'
                value={user.emailaddress}
                onChange={handleInputChange}
                required
            />

            <label htmlFor='password'>Password</label>
            <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                value={user.password}
                onChange={handleInputChange}
                required
            />

            <button type='submit'>Submit</button>

        </form>

    )
}

export default Login