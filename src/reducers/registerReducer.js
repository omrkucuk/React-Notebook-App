/* eslint-disable no-case-declarations */
import { v4 as uuidv4 } from "uuid";

export default function registerReducer(state, action) {
  switch (action.type) {
    case "SET_USER_DATA":
      let savedUsers = JSON.parse(localStorage.getItem("usersData")) || [];

      const newUser = {
        ...state,
        ...action.payload,
        id: uuidv4(),
      };

      savedUsers.push(newUser);

      localStorage.setItem("usersData", JSON.stringify(savedUsers));

      return newUser;

    case "CHANGE_PAGE":
      return { ...state, currentPage: action.payload };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        currentPage: "home",
        currentUser: action.payload,
      };

    case "LOGOUT":
      return { ...state, currentPage: "login", currentUser: null };

    case "ADD_NOTE":
      return { ...state, notes: action.payload };

    case "SET_NOTES":
      return { ...state, notes: action.payload };

    default:
      return state;
  }
}
