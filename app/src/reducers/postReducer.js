
const postReducer = (state={}, action) => {
  switch(action.type){
    case 'FETCH_POSTS':
      return {...state, posts: action.payload, videoId: state.videoId ? state.videoId: action.payload[0]};
    case 'FETCH_POST':
      return {...state, post: action.payload };
    case 'UPDATE_CURRENT_POST':
      return {...state, videoId: action.payload, post: undefined};
    default:
      return state;
  }
};

export default postReducer;