import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import './cart-icon.styles.scss'
import toggleCartHidden from '../../redux/cart/cart.action'

import {connect} from 'react-redux'

const CartIcon = ({toggleCartHidden,hidden}) =>{

    return(
        <>
            <div className='cart-icon' onClick={toggleCartHidden}>
                <ShoppingIcon className='shopping-icon' />
                {
                    hidden?<CartDropDown />:''  
                }
                
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    hidden: state.cart.hidden
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)