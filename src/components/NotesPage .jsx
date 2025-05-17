import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Stack,
} from "@mui/material";
import { UserContext } from "../context/UserContext";
import { format } from "date-fns";

const NotesPage = ({ searchText }) => {
  const { state } = useContext(UserContext);

  const getUserNameById = (userId) => {
    const savedUsers = JSON.parse(localStorage.getItem("usersData")) || [];
    const user = savedUsers.find((user) => user.id === userId);
    return user ? user.userName : "Unknown User";
  };

  const filteredNotes = searchText
    ? state.notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchText.toLowerCase()) ||
          note.content.toLowerCase().includes(searchText.toLowerCase())
      )
    : state.notes;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 5 }}>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 3 }}
      >
        {filteredNotes.map((note) => (
          <Card
            key={note.id}
            sx={{
              maxWidth: 700,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                border: "1px #1976d2 solid",
              },
              backgroundColor: "#FDFBEE",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ borderBottom: "1px #1976d2 solid", width: "100%" }}
                >
                  {getUserNameById(note.userId)}
                  <label style={{ marginLeft: "10px", fontSize: "12px" }}>
                    - Tarafından oluşturuldu
                  </label>
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{ marginTop: 2, fontWeight: "bold" }}
                textAlign={"center"}
              >
                {note.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: 2, fontSize: "14px", lineHeight: "1.6" }}
              >
                {note.content}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 3,
              }}
            >
              <Typography variant="body2" color="textSecondary">
                <label style={{ color: "black" }}>Kategori: </label>
                {note.category}
              </Typography>
              <Stack direction={"row"}>
                <Typography variant="body2" marginRight={1}>
                  Tarih:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {format(new Date(note.createdAt), "dd MMM yyyy HH:mm")}
                </Typography>
              </Stack>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default NotesPage;
