import { Router } from "express";
import { forgetPassword, getProfile, login, logout, register, resetPassword } from "../controllers/userController.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";
//import { isLoggedIn } from "../middleware/auth.middleware.js";
const router = Router()

router.post('/register' , upload.single('avatar'), register)
router.post('/login' ,login)
router.post('/logout' ,logout)
router.get('/me' , isLoggedIn, getProfile)
router.post('/reset' ,forgetPassword)
router.post('/reset/:resetToken' , resetPassword)


export default router

