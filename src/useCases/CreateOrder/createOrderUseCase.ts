import { Order } from '../../entities/Order'
import { OrderRepository } from '../../repositories/OrderRepository'

interface CreateOrderRequest {
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
  }: CreateOrderRequest): Promise<Order> {
    const orderAlreadyExists = await this.orderRepository.orderExists(
      trackingCode
    )

    if (trackingCode === '') {
      throw new Error('Tracking code is required')
    }

    if (title === '') {
      throw new Error('Title is required')
    }

    if (orderAlreadyExists) {
      throw new Error('Order already exists')
    }

    const createdOrder = Order.create({ trackingCode, title, description })
    const order = await this.orderRepository.createOrder(createdOrder)

    return order
  }
}
