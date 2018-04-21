import { ADD_RESPONSE } from './actions';

const initialSate = {
  messages: [],
};

const rootReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_RESPONSE:
      return { ...state, messages: [...state.messages, action.message] };
    default:
      return state;
  }
};

export default rootReducer;
