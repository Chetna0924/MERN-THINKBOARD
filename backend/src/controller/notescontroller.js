export const getallnotes = async (req, res) => {
  res.status(200).json([]);
};

export const createnotes = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content required",
    });
  }

  res.status(201).json({
    message: "Note created",
    note: { title, content },
  });
};

export const updatenotes = async (req, res) => {
  res.json({ message: "Note updated" });
};

export const deletenotes = async (req, res) => {
  res.json({ message: "Note deleted" });
};
