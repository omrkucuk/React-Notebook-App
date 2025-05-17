import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  IconButton,
  Stack,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { UserContext } from "../context/UserContext";
import { format } from "date-fns";
import NavbarComponent from "./NavbarComponent";

const ProfilePage = () => {
  const { state, deleteNote } = useContext(UserContext);
  const currentUser = state.currentUser;

  const userNotes = state.notes.filter(
    (note) => note.userId === currentUser.id
  );

  return (
    <>
      <NavbarComponent />
      <Box sx={{ padding: 5 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Notlarınız
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 3,
          }}
        >
          {userNotes.length === 0 ? (
            <Typography>Kayıtlı notunuz bulunmuyor.</Typography>
          ) : (
            userNotes.map((note) => (
              <Card
                key={note.id}
                sx={{
                  padding: "20px",
                  backgroundColor: "#FDFBEE",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="h6" textAlign={"center"}>
                    {note.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {note.content}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Stack direction={"row"} spacing={1}>
                    <Typography variant="body2">
                      Kategori: {note.category}
                    </Typography>
                    <Typography variant="body2">
                      {format(new Date(note.createdAt), "dd MMM yyyy HH:mm")}
                    </Typography>
                  </Stack>
                  <IconButton color="error" onClick={() => deleteNote(note.id)}>
                    <Delete />
                  </IconButton>
                </CardActions>
              </Card>
            ))
          )}
        </Box>
      </Box>
    </>
  );
};

export default ProfilePage;
