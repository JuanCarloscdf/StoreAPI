import { Router } from 'express'
import * as fn from '../controllers/products.controllers'
const router = Router()
router.get('/', fn.getProducts)
router.get('/:id', fn.getProduct)
router.post('/', fn.postProduct)
router.put('/:id', fn.putProduct)
router.delete('/:id', fn.deleteProduct)
router.patch('/:id', fn.patchProduct)
export { router }
