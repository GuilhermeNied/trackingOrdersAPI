import { Response } from 'express'
import { Order } from '../../entities/Order'
import { UpdateOrderUseCase } from './updateOrderUseCase'

export class UpdateOrderController {
  constructor(private updateOrderUseCase: UpdateOrderUseCase) {}

  async handle(res: Response, { trackingCode, title, description }: Order) {
    try {
      const order = { trackingCode, title, description }
      const updatedOrder = await this.updateOrderUseCase.execute(order)
      res.status(200).send(updatedOrder)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
