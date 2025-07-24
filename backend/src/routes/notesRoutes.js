import expresss from "express";
import {
  deleteNotes,
  updateNotes,
  getAllNotes,
  createNote,
} from "../controller/notesController.js";

const router = expresss.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;
