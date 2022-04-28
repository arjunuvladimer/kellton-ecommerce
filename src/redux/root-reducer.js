import {combineReducers} from 'redux'
import collectionReducer from './collections/collection.reducer'
import directoryReducer from './directory/directory.reducer'

const rootReducer = combineReducers({
    directory: directoryReducer,
    collection: collectionReducer
})

export default rootReducer