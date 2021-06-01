import {combineReducers} from "redux"
import {CharacterReducer} from './CharacterReducer';
import {QueryReducer} from './QueryReducer';
const allreducers = combineReducers({
    characters: CharacterReducer,
    query: QueryReducer
})
export default allreducers;