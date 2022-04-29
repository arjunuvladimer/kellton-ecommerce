import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import './cart-icon.styles.scss'

import {useState} from 'react'


const CartIcon = () =>{
    const [hidden,setHidden] = useState(true)
    const handleDropDown = () => {
        setHidden(!hidden)
    }
    return(
        <>
            <div className='cart-icon' onClick={handleDropDown}>
                <ShoppingIcon className='shopping-icon' />
                {
                    hidden?<CartDropDown />:''  
                }
                
            </div>
        </>
    )
}

export default CartIcon