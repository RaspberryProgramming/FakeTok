import posts from "../apis/posts";

export const fetchPosts = () => async (dispatch) => {
    
    const response = await posts.get('/'); // Request list of posts
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data}); // Dispatch data to FETCH_POSTS

};

export const fetchPost = (id) => async (dispatch) => {

    const response = await posts.get(`/post/${id}`); // Request post information

    dispatch({ type: 'FETCH_POST', payload: response.data }); // Dispatch FETCH_POST

};

export const postUp = () => async (dispatch, getState) => {
    const state = getState().posts; // Get state

    const index = state.posts.indexOf(state.videoId); // Get index;

    let videoId = state.posts[index]; // Default to current videoId

    if (index > 0) { // If the video can be updated, decrement
        videoId = state.posts[index-1];
    }

    dispatch({ type: 'UPDATE_CURRENT_POST', payload: videoId});
};

export const postDown = () => async (dispatch, getState) => {
    const state = getState().posts; // Get state

    const index = state.posts.indexOf(state.videoId); // Get index;

    let videoId = state.posts[index]; // Default to current videoId

    if (index < state.posts.length-1) { // If the video can be updated, increment
        videoId = state.posts[index+1];
    }

    dispatch({ type: 'UPDATE_CURRENT_POST', payload: videoId});
};

export const setUsername = (username) => async (dispatch) => {
    localStorage.setItem('username', username);
    dispatch({ type: 'UPDATE_USERNAME', payload: username });
};