import {useParams} from 'react-router-dom'

const Category = () => {
   let params = useParams()
    return (
        <>  
            <p>{params.categoryId}</p>
        </>
    )
}

export default Category