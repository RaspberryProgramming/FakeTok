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

    let videoId = state.posts[index];

    if (index > 0) {
        videoId = state.posts[index-1];
    }

    dispatch({ type: 'UPDATE_CURRENT_POST', payload: videoId});
    //fetchPost(videoId);
};

export const postDown = () => async (dispatch, getState) => {
    const state = getState().posts; // Get state

    const index = state.posts.indexOf(state.videoId); // Get index;

    let videoId = state.posts[index];


    if (index < state.posts.length-1) {
        videoId = state.posts[index+1];
    }

    dispatch({ type: 'UPDATE_CURRENT_POST', payload: videoId});
    //fetchPost(videoId);
};

export const uploadVideo = (formValues) => async (dispatch, getState) => {

    const username = getState().username; // Get username

    const response = await posts.post('/upload', { ...formValues, uploader: username });
    
    dispatch({ type: 'UPLOAD_VIDEO', payload: response.data });

};

export const setUsername = (username) => async (dispatch) => {
    localStorage.setItem('username', username);
    dispatch({ type: 'UPDATE_USERNAME', payload: username });
};