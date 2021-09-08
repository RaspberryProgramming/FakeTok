
const postReducer = (state={}, action) => {
  switch(action.type){
    case 'FETCH_POSTS':
      return { ...state, posts: action.payload}
    case 'FETCH_POST':
      return { ...state, [action.payload.id]: action.payload };
    case 'UPLOAD_STREAM':
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export default postReducer;