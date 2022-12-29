import { Router } from 'express'
import { findOrderByTrackingCodeController } from '../useCases/FindOrderByTrackingCode'
import { getAllOrdersController } from '../useCases/GetAllOrders'
import { createOrderController } from '../useCases/UpdateOrder'

export const router = Router()

router.post('/createOrder', (req, res) => {
  return createOrderController.handle(req, res)
})

router.get('/orders', (req, res) => {
  return getAllOrdersController.handle(req, res)
})

router.get('/order/:trackingCode', (req, res) => {
  const trackingCode = req.params.trackingCode
  return findOrderByTrackingCodeController.handle(req, res, trackingCode)
})
