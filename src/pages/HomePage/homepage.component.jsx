import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.style.scss'

// Maintaining the entire state for the home page with the
// sections array that contributes to give the categories 
// of products
class HomePage extends React.Component {
    constructor(){
        super()
        this.state = {
            sections: [
                        {
                        title: 'hats',
                        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                        id: 1
                        },
                        {
                        title: 'jackets',
                        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                        id: 2
                        },
                        {
                        title: 'sneakers',
                        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                        id: 3
                        },
                        {
                        title: 'womens',
                        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                        size: 'large',
                        id: 4
                        },
                        {
                        title: 'mens',
                        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                        size: 'large',
                        id: 5
                        }
                    ]
        }
    }
    render(){
        // From the this.state object destructuring sections
        const {sections} = this.state
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
}



export default HomePage