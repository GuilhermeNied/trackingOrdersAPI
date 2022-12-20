import { Order } from '../../entities/Order'
import { OrderRepository } from '../../repositories/OrderRepository'

export class GetAllOrdersUseCase {
  constructor(private orderRepository: OrderRepository) {}
  async execute(): Promise<Order[]> {
    const allOrders = await this.orderRepository.getAllOrders()
    return allOrders
  }
}
