import './MenuItem.style.scss'

const MenuItem = ({menu}) => {
    return (
        <>
        <div className='menu-item'>
                <div
                    className='background-image'
                    style={{
                        backgroundImage: `url(${menu.imageUrl})`
                    }}
                />
                <div className='content'>
                    <div className='title'>{menu.title}</div>
                    <div className='subtitle'>SHOP NOW</div>
                </div>
        </div>
        </>
    )
}

export default MenuItem