
import express from "express";
import * as NotesControllers from "../controllers/notes";

const router = express.Router();


router.get("/", NotesControllers.getNotes);

router.post("/", NotesControllers.createNote);

export default router;