import {SET_FLDPATH} from './actions'
import {diskAPI} from "../components/api/api";

let initialState = {
    data: []
}

const diskdataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLDPATH: {
            return {...state, data: action.data}
        }
        default:
            return state;
    }
}

export default diskdataReducer;
