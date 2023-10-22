import axios from "axios";
import Cookies from "js-cookie";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const ADD_USERS = "ADD_USERS";
export const DELETE_USERS = "DELETE_USERS";

export const LOGIN_USER = "LOGIN_USER";

export const getAllUser = () => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: GET_ALL_USERS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Api
    axios({
      method: "GET",
      url: "http://localhost:3010/users",
      timeout: 120000,
    })
      .then((response) => {
        // loading
        dispatch({
          type: GET_ALL_USERS,
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
          type: GET_ALL_USERS,
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

export const addUser = (data) => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: ADD_USERS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Api
    axios({
      method: "POST",
      url: "http://localhost:3010/users/add",
      timeout: 120000,
      data,
    })
      .then((response) => {
        // loading
        dispatch({
          type: ADD_USERS,
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
          type: ADD_USERS,
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

export const loginUser = (data) => {
  return (dispatch) => {
    // Get Api
    axios({
      method: "POST",
      url: "http://localhost:3010/login",
      timeout: 120000,
      data,
    })
      .then((response) => {
        // loading
        const token = response.data.data.token;
        Cookies.set("token", token, { expires: 1 });

        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log("3. Gagal dapat Data: ", error);

        dispatch({
          type: LOGIN_USER,
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
