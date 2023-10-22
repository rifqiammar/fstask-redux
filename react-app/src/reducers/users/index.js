import { GET_ALL_USERS, ADD_USERS, LOGIN_USER } from "../../actions/userAction";

const initialState = {
  getAllUsersResult: false,
  getAllUsersLoading: false,
  getAllUsersError: false,

  addUsersResult: false,
  addUsersLoading: false,
  addUsersError: false,

  loginUserResult: false,
  loginUserLoading: false,
  loginUserError: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        getAllUsersResult: action.payload.data,
        getAllUsersLoading: action.payload.loading,
        getAllUsersError: action.payload.error,
      };

    case ADD_USERS:
      return {
        ...state,
        addUserResult: action.payload.data,
        addUserLoading: action.payload.loading,
        addUserError: action.payload.error,
      };

    case LOGIN_USER:
      return {
        ...state,
        loginUserResult: action.payload.data,
        loginUserLoading: action.payload.loading,
        loginUserError: action.payload.error,
      };

    default:
      return state;
  }
};

export default users;
