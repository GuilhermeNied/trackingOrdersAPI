import { Order } from '../../entities/Order'
import { OrderRepository } from '../../repositories/OrderRepository'

interface CreteOrderRequest {
  trackingCode: string
  title: string
  description: string
}

export class CreateOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    trackingCode,
    title,
    description
  }: CreteOrderRequest): Promise<Order> {
    const order = new Order({
      trackingCode,
      title,
      description
    })

    const orderAlreadyExists = await this.orderRepository.findOrderByTrackingCode(trackingCode)

    if (orderAlreadyExists) {
      throw new Error('Order already exists')
    }

    await this.orderRepository.createOrder(order)

    return order
  }
}
