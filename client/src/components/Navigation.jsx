import logo from '../assets/wellness.png'

const Navigation = () => {
    return (

        <nav>
            <ul>
                <li><img src={logo} /><strong>Welcome to VitalVerse</strong></li>
            </ul>
            <ul>
                <li><a href='/' role='button'>Login</a></li>
                <li><a href='/register' role='button'>Register</a></li>
            </ul>
        </nav>

    )
}

export default Navigation