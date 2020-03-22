import {SHOW_LOADER} from '../actions';

const Common = (state={}, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
              should_show_loader: action.data
            };
        default:
            return state
    }
};

export default Common;