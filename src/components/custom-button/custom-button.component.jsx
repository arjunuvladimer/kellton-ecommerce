import './custom-button.style.scss'

const CustomButton = ({children, ...otherProps}) => (
    <button
        {...otherProps}
        className='custom-button'
    >
        {children}
    </button>
)

export default CustomButton