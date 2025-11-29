import express from "express"
import { createnotes,deletenotes, getallnotes, updatenotes } from "../controller/notescontroller.js";
const router =express.Router();
router.get("/",getallnotes);
router.post("/",createnotes);
router.put("/:id",updatenotes);
router.delete("/:id",deletenotes);
export default router;