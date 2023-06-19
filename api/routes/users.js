import express from 'express'
import { deleteUser, getUsers, updateUser } from '../controllers/user.js'

const router=express.Router();
router.get("/",getUsers);
router.post("/",getUsers)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)


export default router