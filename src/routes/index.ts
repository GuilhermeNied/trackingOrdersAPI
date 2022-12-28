import { Router } from 'express'
import { createOrderController } from '../useCases/UpdateOrder'

export const router = Router()

router.post('/createOrder', (req, res) => {
  return createOrderController.handle(req, res)
})
