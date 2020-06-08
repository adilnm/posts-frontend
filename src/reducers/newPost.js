import { combineReducers } from "redux";

const rootReducer=combineReducers({
    posts:Add
})
export default rootReducer

function Add(state=null,action){
    switch (action.type) {
        case 'LOAD-POSTS':
            return action.payload
        case 'CREATE-POST':
            return [...state,action.payload]
        default:
           return state
    }
}