import {Link} from 'react-router-dom'

const Menu = () => {
    return(
        <>
            <Link to='/'>Home</Link> <br/>
            <Link to='/about'>About Us</Link> <br/>
            <Link to='/contact'>Contact Us</Link>
        </>
    )
}

export default Menu