import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { UserContext } from "../context/UserContext";
import { v4 as uuidv4 } from "uuid";

const AddNoteModal = ({ open, handleClose }) => {
  const { state, addNote } = useContext(UserContext);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [noteCategory, setNoteCategory] = useState("");

  const handleSaveNote = () => {
    const newNote = {
      title: noteTitle,
      content: noteContent,
      category: noteCategory,
      userId: state.currentUser.id,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };

    addNote(newNote);

    setNoteTitle("");
    setNoteContent("");
    setNoteCategory("");

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Not Ekle</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Başlık"
          fullWidth
          variant="outlined"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <TextField
          rows={5}
          multiline
          margin="dense"
          label="İçerik"
          fullWidth
          variant="outlined"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel>Kategori</InputLabel>
          <Select
            value={noteCategory}
            onChange={(e) => setNoteCategory(e.target.value)}
            label="Kategori"
          >
            <MenuItem value="Genel">Genel</MenuItem>
            <MenuItem value="İş">İş</MenuItem>
            <MenuItem value="Kişisel">Kişisel</MenuItem>
            <MenuItem value="Eğitim">Eğitim</MenuItem>
            <MenuItem value="Eğlence">Eğlence</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          İptal
        </Button>
        <Button onClick={handleSaveNote} color="primary">
          Kaydet
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNoteModal;
