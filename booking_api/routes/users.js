import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();
//CHECK AUTH
// router.get("/authentication", verifyToken, (req, res, next) => {
//     res.send("Hellow, user you are logged in!")
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hellow, user you are logged in and you can delete your account!")
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hellow, admin you are logged in and you can delete all account!")
// });

//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GETALL
router.get("/", verifyAdmin, getUsers);


export default router;
