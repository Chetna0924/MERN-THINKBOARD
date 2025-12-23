
export const getallnotes = async (_req, res) => {
  try {
    const notes = await note.find({});
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notes" });
  }
};

export const createnotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    res.status(201).json({ title, content });
  } catch (error) {
    res.status(500).json({ message: "Failed to create note" });
  }
};

export const updatenotes = async (req, res) => {
  try {
    res.status(200).json({ message: "Note updated" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update note" });
  }
};

export const deletenotes = async (req, res) => {
  try {
    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete note" });
  }
};
