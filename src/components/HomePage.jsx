import React, { useState } from "react";
import { UserContext } from "../context/UserContext";
import NavbarComponent from "./NavbarComponent";
import NotesPage from "./NotesPage ";

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <NavbarComponent searchText={searchText} setSearchText={setSearchText} />
      <NotesPage searchText={searchText} />
    </>
  );
}
