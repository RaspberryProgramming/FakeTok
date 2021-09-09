
const postReducer = (state={}, action) => {
  switch(action.type){
    case 'FETCH_POSTS':
      return {...state, posts: action.payload, videoId: state.videoId ? state.videoId: action.payload[0]};
    case 'FETCH_POST':
      return {...state, post: action.payload };
    case 'UPLOAD_STREAM':
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export default postReducer;