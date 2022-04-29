import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import './Checkout.styles.scss'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';

const Checkout = ({cartItems, totalPrice}) => {
    return(
        <>
            <div className="checkout-page">
                <div className='checkout-header'>
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItems.map((item,idx) =>  <CheckoutItem key={idx} item = {item}/>)
                }
                <div className="total">
                    <span>Total: $ {totalPrice}</span>
                </div>
                    <div className='test-warning'>
                        *** Please use the following test 
                        credit card for the payments**
                        <br />
                        4242 4242 4242 4242 - Exp: 11/22 - CVV:123
                    </div>
                    <StripeCheckout price={totalPrice} />
            </div>
            
           
        </>
    )
}

const mapStateToProps = ({cart}) => ({
    cartItems:cart.cartItems,
    totalPrice: cart.cartItems.reduce(
                (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity * cartItem.price, 
                0) 
})

export default connect(mapStateToProps, null)(Checkout)