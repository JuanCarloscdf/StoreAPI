import { Router } from 'express'
import * as fn from '../controllers/cart.controllers'
const router = Router()
router.get('/:id', fn.getCart)
router.post('/', fn.postCart)
router.delete('/', fn.deleteCart)
router.put('/', fn.putCart)
export { router }
