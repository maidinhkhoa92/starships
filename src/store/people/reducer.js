import actions from './actions';

const initialState = {
  list: {
    count: 0,
    next: null,
    previous: null,
    results: []
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
