import {connect} from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown-styles.scss'
import  {CartItem}  from '../cart-item/cart-item.component'


const CartDropDown = ({cartItems}) => (
    <>
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map((item,idx) => <CartItem key={idx} item={item} />)}
            </div>
            <CustomButton>GOTOCHECKOUT</CustomButton>
        </div>
    </>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})
export default connect(mapStateToProps,null)(CartDropDown)