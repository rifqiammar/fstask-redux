import { GET_ALL_POSTS, ADD_POST } from "../../actions/postAction";

const initialState = {
  getAllPostsResult: false,
  getAllPostsLoading: false,
  getAllPostsError: false,

  addPostResult: false,
  addPostLoading: false,
  addPostError: false,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        getAllPostsResult: action.payload.data,
        getAllPostsLoading: action.payload.loading,
        getAllPostsError: action.payload.error,
      };

    case ADD_POST:
      return {
        ...state,
        addPostResult: action.payload.data,
        addPostLoading: action.payload.loading,
        addPostError: action.payload.error,
      };

    default:
      return state;
  }
};

export default posts;
