import axios from "axios";
import Cookies from "js-cookie";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const ADD_POST = "ADD_POST";
const token = Cookies.get("token");

export const getAllPosts = () => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: GET_ALL_POSTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Api

    axios({
      method: "GET",
      url: "http://localhost:3010/posts",
      headers: { Authorization: token },
    })
      .then((response) => {
        // loading
        dispatch({
          type: GET_ALL_POSTS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("3. Gagal dapat Data: ", error);

        dispatch({
          type: GET_ALL_POSTS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
    //
  };
};
// --------------------------------------------

export const addPost = (data) => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: ADD_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    console.log(data);
    // Get Api
    axios({
      method: "POST",
      url: "http://localhost:3010/posts/add",
      timeout: 120000,
      data,
      headers: { Authorization: token },
    })
      .then((response) => {
        // loading
        dispatch({
          type: ADD_POST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal dapat Data: ", error);

        dispatch({
          type: ADD_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
    //
  };
};
