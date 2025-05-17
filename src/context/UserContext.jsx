import { createContext, useEffect, useReducer } from "react";
import registerReducer from "../reducers/registerReducer";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(registerReducer, {
    id: 0,
    name: "",
    surname: "",
    userName: "",
    email: "",
    password: "",
    currentPage: "login",
    currentUser: null,
    notes: [],
  });

  function userRegister(value) {
    dispatch({ type: "SET_USER_DATA", payload: value });
  }

  function changePage(page) {
    dispatch({ type: "CHANGE_PAGE", payload: page });
  }

  function addNote(note) {
    const newNote = {
      ...note,
      id: uuidv4(),
      userId: state.currentUser.id,
    };

    const updatedNotes = [...state.notes, newNote];
    localStorage.setItem("notesData", JSON.stringify(updatedNotes));
    dispatch({ type: "ADD_NOTE", payload: updatedNotes });
  }

  function userLogin(formData) {
    const savedUsers = JSON.parse(localStorage.getItem("usersData"));

    if (savedUsers) {
      const matchedUser = savedUsers.find(
        (user) =>
          user.userName === formData.userName &&
          user.password === formData.password
      );

      if (matchedUser) {
        sessionStorage.setItem("currentUser", JSON.stringify(matchedUser));
        dispatch({ type: "LOGIN_SUCCESS", payload: matchedUser });
        return true;
      }
    }

    return false;
  }

  function userLogout() {
    sessionStorage.removeItem("currentUser");
    dispatch({ type: "LOGOUT" });
  }

  const deleteNote = (id) => {
    const updatedNotes = state.notes.filter((note) => note.id !== id);
    dispatch({ type: "SET_NOTES", payload: updatedNotes });
    localStorage.setItem("notesData", JSON.stringify(updatedNotes));
  };

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if (sessionUser) {
      dispatch({ type: "LOGIN_SUCCESS", payload: sessionUser });
    }

    const savedNotes = JSON.parse(localStorage.getItem("notesData")) || [];
    dispatch({ type: "SET_NOTES", payload: savedNotes });
  }, []);

  const values = {
    state,
    userRegister,
    changePage,
    userLogin,
    userLogout,
    addNote,
    deleteNote,
  };

  return (
    <UserContext.Provider value={values}> {children}</UserContext.Provider>
  );
}
