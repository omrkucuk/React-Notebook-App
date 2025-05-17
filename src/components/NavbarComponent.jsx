import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Box,
  Stack,
} from "@mui/material";
import {
  Search,
  Add,
  AccountCircle,
  ExitToApp,
  HomeSharp,
} from "@mui/icons-material";
import { UserContext } from "../context/UserContext";
import AddNoteModal from "./AddNoteModal";

const NavbarComponent = ({ searchText, setSearchText }) => {
  const { state, userLogout, changePage } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const currentUser = state.currentUser;

  const handleProfileClick = () => {
    changePage("profile");
  };
  const handleHomeClick = () => {
    changePage("home");
  };

  return (
    <AppBar position="sticky" color="primary" sx={{ margin: 0, padding: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          Not Defteri - Hoşgeldiniz: {currentUser.userName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "4px",
            width: 500,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <Search />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Notları Ara..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            inputProps={{ "aria-label": "search notes" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Stack gap={1} direction={"row"} alignItems={"center"}>
            <Typography variant="body1" sx={{ fontSize: 15 }}>
              Ana Sayfa
            </Typography>
            <IconButton color="inherit" onClick={handleHomeClick}>
              <HomeSharp />
            </IconButton>
          </Stack>
          <Stack gap={1} direction={"row"} alignItems={"center"}>
            <Typography variant="body1" sx={{ fontSize: 15 }}>
              Not Ekle
            </Typography>
            <IconButton color="inherit" onClick={handleOpenModal}>
              <Add />
            </IconButton>
          </Stack>

          <Stack gap={1} direction={"row"} alignItems={"center"}>
            <Typography variant="body1" sx={{ fontSize: 15 }}>
              Profil
            </Typography>
            <IconButton color="inherit" onClick={handleProfileClick}>
              <AccountCircle />
            </IconButton>
          </Stack>

          <Stack gap={1} direction={"row"} alignItems={"center"}>
            <Typography variant="body1" sx={{ fontSize: 15 }}>
              Çıkış Yap
            </Typography>
            <IconButton color="inherit" onClick={userLogout}>
              <ExitToApp />
            </IconButton>
            <AddNoteModal open={openModal} handleClose={handleCloseModal} />
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
