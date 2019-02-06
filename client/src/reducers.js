// import { } from './actions';

const initialSate = {};

const rootReducer = (state = initialSate, action) => {
  switch (action.type) {
    case 'TMP-ACTION-TYPE':
      return { ...state, tmp: 'tmp' };
    default:
      return state;
  }
};

export default rootReducer;