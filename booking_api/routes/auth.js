import express from "express";
import { register } from './../controller/auth.js';

const router = express.Router();

//Register
router.post("/", register);



export default router;
