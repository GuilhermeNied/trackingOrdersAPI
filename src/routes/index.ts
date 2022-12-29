import { Router } from 'express'
import { createOrderController } from '../useCases/CreateOrder'
import { deleteOrderByTrackingCodeController } from '../useCases/DeleteOrderByTrackingCode'
import { findOrderByTrackingCodeController } from '../useCases/FindOrderByTrackingCode'
import { getAllOrdersController } from '../useCases/GetAllOrders'
import { updateOrderController } from '../useCases/UpdateOrder'

export const router = Router()

router.post('/createOrder', (req, res) => {
  const { trackingCode, title, description } = req.body
  const order = { trackingCode, title, description }
  return createOrderController.handle(req, res, order)
})

router.get('/orders', (req, res) => {
  return getAllOrdersController.handle(req, res)
})

router.get('/order/:trackingCode', (req, res) => {
  const trackingCode = req.params.trackingCode
  return findOrderByTrackingCodeController.handle(req, res, trackingCode)
})

router.delete('/deleteOrder/:trackingCode', (req, res) => {
  const trackingCode = req.params.trackingCode
  return deleteOrderByTrackingCodeController.handle(req, res, trackingCode)
})

router.put('/updateOrder/:trackingCode', (req, res) => {
  const trackingCode = req.params.trackingCode
  const { title, description } = req.body
  const order = { trackingCode, title, description }

  return updateOrderController.handle(req, res, order)
})
