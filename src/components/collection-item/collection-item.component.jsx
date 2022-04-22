import './collection-item.styles.scss'

const CollectionItem = () => {
    return (
        <>
            <div className='collection-item'>
                <div className='image' />
                <span className='name'>Brown Brim</span>
                <span className='price'>$25</span>
            </div>
        </>
    )
}

export default CollectionItem