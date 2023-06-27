import { Router } from 'express'
import * as fn from '../controllers/user.controllers'
import { checkAuth } from '../middleware/checkAuth'
const router = Router()
/**
 * @swagger
*/
router.get('/', checkAuth, fn.getUsers)
router.get('/:id', fn.getUser)
router.post('/', fn.postUser)
router.put('/:id', fn.putUser)
router.delete('/:id', fn.deleteUser)
router.patch('/:id', fn.patchUser)
export { router }
