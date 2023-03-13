import { Order } from '../../entities/Order'
import { OrderRepository } from '../../repositories/OrderRepository'

export class UpdateOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({ trackingCode, title, description }: Order): Promise<Order> {
    const order = { trackingCode, title, description }

    if (trackingCode === '') {
      throw new Error('Tracking code is required')
    }

    if (title === '') {
      throw new Error('Title is required')
    }

    const updatedOrder = this.orderRepository.updateOrder(order)

    return updatedOrder
  }
}
