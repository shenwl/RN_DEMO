import types from '../../actions/types';

const defaultState = {
  theme: 'blue',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.THEME_CHANGE:
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      return state;
  }
};

