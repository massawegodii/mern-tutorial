import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controller/hotel.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);

//CREATE
router.post("/",verifyAdmin, createHotel);

//UPDATE
router.put("/:id",verifyAdmin, updateHotel);

//DELETE
router.delete("/find/:id",verifyAdmin, deleteHotel);

//GET
router.get("/:id", getHotel);

//GETALL
router.get("/", getHotels);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

export default router;
