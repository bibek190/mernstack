import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json({ message: notes });
  } catch (err) {
    console.log("Error in getAllNotes controller", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(200).json({ message: "created new note" });
  } catch (err) {
    console.log("Error in createNote controller", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNotes = async (req, res) => {
  try {
    res.status(200).json({ message: "Note updated succesfully" });
  } catch (err) {
    res.status(400).json({ message: "Invalid creadential" });
  }
};

export const deleteNotes = async (req, res) => {
  try {
    res.status(200).json({ message: "Deleted note succesfully" });
  } catch (err) {
    res.status(400).json({ message: "Invalid creadential" });
  }
};
