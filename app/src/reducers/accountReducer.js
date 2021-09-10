
const postReducer = (state={}, action) => {
    switch(action.type){
      case 'UPDATE_USERNAME':
        return {...state, username: action.payload};

      default:
        return state;
    }
  };
  
  export default postReducer;