import posts from "../apis/posts";

export const fetchPosts = () => async (dispatch) => {
    
    const response = await api.get('/'); // Request list of posts
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data}); // Dispatch data to FETCH_POSTS

};

export const fetchPost = (id) => async (dispatch) => {

    const response = await api.get(`/post/${id}`); // Request post information

    dispatch({ type: 'FETCH_POST', payload: response.data }); // Dispatch FETCH_POST

};

export const uploadVideo = (formValues) => async (dispatch, getState) => {

    const username = getState().username; // Get username

    const response = await streams.post('/streams', { ...formValues, username });

    dispatch({ type: UPLOAD_VIDEO, payload: response.data });

};