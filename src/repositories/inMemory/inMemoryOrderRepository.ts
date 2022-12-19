import { Order } from '../../entities/Order'
import { OrderRepository } from '../OrderRepository'

export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = []

  async createOrder(order: Order): Promise<Order> {
    this.orders.push(order)
    return order
  }

  async findOrderByTrackingCode(trackingCode: string): Promise<Order> {
    const findedOrder = this.orders.find(order => order.trackingCode === trackingCode)!!
    return findedOrder
  }

  async orderExists(trackingCode: string): Promise<boolean> {
    const order = this.orders.some((order) => order.trackingCode === trackingCode)
    return order
  }
}
