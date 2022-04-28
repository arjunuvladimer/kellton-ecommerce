import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crwns.svg'
import CartIcon from '../cart-icon/cart-icon.component'

const Header = () => {
    return(
        <>
            <div className='header'>
                {/** Logo */}
                <Link 
                    className='logo-container'
                    to='/'>
                    <Logo className='logo' />
                </Link> 
                {/** Options */}
                <div className='options'>
                    <Link 
                        className='option'
                        to='/shop'>
                        SHOP
                    </Link>
                    <Link 
                        className='option'
                        to='/signin'>
                        SIGN IN
                    </Link>
                    <Link 
                        className='option'
                        to='/contact'>
                        CONTACT
                    </Link>
                    <CartIcon />
                </div>
            </div>
        </>
    )
}

export default Header