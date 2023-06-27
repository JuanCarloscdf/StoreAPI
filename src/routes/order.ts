import { Router } from 'express'
import * as fn from '../controllers/order.controllers'
const router = Router()
router.get('/:id', fn.getOrders)
router.post('/', fn.postOrders)
router.delete('/:id', fn.deleteOrders)
export { router }
