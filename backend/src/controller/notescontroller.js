import Note from "../models/Note.js";

/* ✅ GET ALL NOTES */
export const getallnotes = async (_req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Get notes error:", error);
    res.status(500).json({ message: "Failed to fetch notes" });
  }
};

/* ✅ CREATE NOTE */
export const createnotes = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content required" });
    }

    const newNote = await Note.create({
      title,
      content,
    });

    res.status(201).json(newNote);
  } catch (error) {
    console.error("Create note error:", error);
    res.status(500).json({ message: "Failed to create note" });
  }
};

/* ✅ UPDATE NOTE */
export const updatenotes = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Update note error:", error);
    res.status(500).json({ message: "Failed to update note" });
  }
};

/* ✅ DELETE NOTE */
export const deletenotes = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Delete note error:", error);
    res.status(500).json({ message: "Failed to delete note" });
  }
};
