import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.style.scss'
import {connect} from 'react-redux'

// Maintaining the entire state for the home page with the
// sections array that contributes to give the categories 
// of products
const HomePage = ({sections}) => {
        // From the this.state object destructuring sections
        return (
            <>
                <div className='homepage'>
                <h1>Welcome to my HomePage</h1>
                {/**sending sections array as a prop */}
                   <Directory sections = {sections}/>
                </div>
            </>
        )
    
}
const mapStateToProps = (state) => ({
    sections: state.directory.sections
})
export default connect(mapStateToProps,null)(HomePage)