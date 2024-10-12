import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelId",verifyAdmin, createRoom);

//UPDATE
router.put("/:id",verifyAdmin, updateRoom);

//DELETE
router.delete("/:id",verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GETALL
router.get("/", getRooms);

export default router;
