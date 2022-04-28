import { useNavigate } from 'react-router-dom'
import './MenuItem.style.scss'
// Menu with title, image URL is being carried
const MenuItem = ({menu}) => {
    let navigate = useNavigate()
    return (
        <>
            <div className='menu-item'>
                    <div
                        className='background-image'
                        style={{
                            backgroundImage: `url(${menu.imageUrl})`
                        }}
                        onClick ={ () => navigate(`/category/${menu.title}`)}
                    />
                    <div className='content'>
                            <div className='title'>{menu.title.toUpperCase()}</div>
                            <div className='subtitle'>SHOP NOW</div>
                    </div> 
            </div>
        
        </>
    )
}

export default MenuItem