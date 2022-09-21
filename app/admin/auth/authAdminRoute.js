import express from 'express'
import { adminOnly } from '../../../middleware/authUser.js'
import { loginAdmin, logoutAdmin, me, registerAdmin } from './authAdminController.js'
const router = express.Router()

router.post('/auth/admin', registerAdmin)
router.post('/auth/admin/login', loginAdmin)
router.get('/auth/admin/me', adminOnly, me)
router.delete('/auth/admin/logout',adminOnly, logoutAdmin)

export default router