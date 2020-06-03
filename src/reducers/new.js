import { combineReducers } from "redux";

const rootReducer=combineReducers({
    Posts:Add
})
export default rootReducer

function Add(state=[],action){
    switch (action.type) {
        case 'CREATE-POST':
            return [...state,action.payload]
        default:
           return state
    }
}