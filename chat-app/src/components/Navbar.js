import Navitem from './Navitem'

const Navbar = ({ loggedIn, setLoggedIn }) => {
    const logout = () => {
        localStorage.removeItem('acces_token');
        sessionStorage.removeItem('user_id');
        localStorage.setItem('loggedIn', false)
        setLoggedIn(false);
    }

    return (
        <div className='navbar'>
            {loggedIn ? ([<Navitem link='/chat' text='Chat' />, <Navitem onClick={logout} link='/login' text='Log Out' />]) : ([<Navitem link='/login' text='Log in' />, <Navitem link='signup' text='Sign up' />])}
        </div>
    )
}

export default Navbar
