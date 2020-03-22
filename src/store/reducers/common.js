import {BANK_DATA_RECEIVED, SHOW_LOADER} from '../actions';
const Common = (state={}, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
              should_show_loader: action.data
            };
        case BANK_DATA_RECEIVED:
            return {
              bankData: action.data
            };
        default:
            return state
    }
};

export default Common;