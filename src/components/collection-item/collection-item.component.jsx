import './collection-item.styles.scss'

const CollectionItem = ({item}) => {
    const {name,imageUrl,price} = item
    return (
        <>
            <div className='collection-item'>
                <div 
                    className='image'
                    style={{backgroundImage: `url(${imageUrl})`}}
                />
               <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>${price}</span>
               </div>
            </div>
        </>
    )
}

export default CollectionItem