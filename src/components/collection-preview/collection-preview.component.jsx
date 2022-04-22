import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

const CollectionPreview = () =>{
    return(
        <>
            <div className='collection-preview'>
                <h1>HATS</h1>
                <CollectionItem />
            </div>
        </>
    )
}

export default CollectionPreview