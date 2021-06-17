// eslint-disable-next-line import/no-anonymous-default-export
import _ from 'lodash';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_USER_POSTS':
            return {...state, ..._.mapKeys(action.payload, '_id')};  
        default:
            return state;
    }
}