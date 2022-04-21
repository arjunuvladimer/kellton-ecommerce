import MenuItem from '../menu-item/MenuItem.component'
import './directory.style.scss'


const Directory = ({sections}) => {
    
    return (
        <>
         {/** sections array we are iterating
         to form different menu items */}
            <div className='directory-menu'>
            {
               
                sections.map(menu => <MenuItem key={menu.id} menu={menu} /> )
            }
               
            </div>
        </>
    )
}

export default Directory