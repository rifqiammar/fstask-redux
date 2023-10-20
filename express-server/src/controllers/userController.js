import errorhandling from "../helpers/errorhandling.js";

const getUsers = (req, res) => {
  try {
    res.send(errorhandling(200, "success", "Alhamdulillah, User Route Berjalan"));
  } catch (error) {
    console.log(error.message);
  }
};

export { getUsers };
