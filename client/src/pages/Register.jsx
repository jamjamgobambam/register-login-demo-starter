import { useState } from 'react'
import UsersAPI from '../services/UsersAPI'

const Register = () => {
    const [user, setUser] = useState({firstname: '', lastname: '', emailaddress: '', password: ''})

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    
    



    return (

        <form>
            <div className='grid'>
                <label htmlFor='firstname'>
                    First Name
                    <input
                        type='text'
                        id='firstname'
                        name='firstname'
                        placeholder='First name'
                        value={user.firstname}
                        onChange={handleInputChange}
                        required
                    />
                </label>

                <label htmlFor='lastname'>
                    Last Name
                    <input
                        type='text'
                        id='lastname'
                        name='lastname'
                        placeholder='Last name'
                        value={user.lastname}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>

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

export default Register