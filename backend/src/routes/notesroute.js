import express from "express";
import {
  getallnotes,
  createnotes,
  updatenotes,
  deletenotes,
  getNoteById
} from "../controller/notescontroller.js";

const router = express.Router();

router.get("/", getallnotes);
router.post("/", createnotes);
router.put("/:id", updatenotes);
router.delete("/:id", deletenotes);
router.get("/:id",getNoteById);

export default router;
