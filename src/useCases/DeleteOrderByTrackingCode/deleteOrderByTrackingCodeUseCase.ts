import { Order } from '../../entities/Order'
import { OrderRepository } from '../../repositories/OrderRepository'

export class DeleteOrderByTrackingCodeUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(trackingCode: string): Promise<Order> {
    const deletedOrder = await this.orderRepository.deleteOrderByTrackingCode(
      trackingCode
    )

    const orderExists = await this.orderRepository.orderExists(trackingCode)

    // if (!orderExists) {
    //   throw new Error('Order does not exist')
    // }

    return deletedOrder
  }
}
