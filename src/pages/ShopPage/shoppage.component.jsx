import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import './shoppage.styles.scss'
import { connect } from 'react-redux'
const ShopPage = ({collections}) => {
        return(
            <>
                {
                    collections.map(
                        collection => <CollectionPreview 
                                        key={collection.id} 
                                        collection={collection} 
                                      /> 
                        )
                }
                
            </>
        )
}
const mapStateToProps = (state) => ({
    collections: state.collection.collections
})
export default connect(mapStateToProps, null)(ShopPage)