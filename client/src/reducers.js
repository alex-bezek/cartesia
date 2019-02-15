import { actions } from './actions';

const initialSate = {
  gameList: []
};

const rootReducer = (state = initialSate, action) => {
  switch (action.type) {
    case actions.UPDATE_GAME_LIST:
      return { gameList: action.gameList };
    default:
      return state;
  }
};

export default rootReducer;
