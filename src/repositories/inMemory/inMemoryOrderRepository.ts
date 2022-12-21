import { Order } from '../../entities/Order'
import { OrderRepository } from '../OrderRepository'

export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = []

  async createOrder(order: Order): Promise<Order> {
    this.orders.push(order)
    return order
  }

  async findOrderByTrackingCode(trackingCode: string): Promise<Order> {
    const findedOrder = this.orders.find(
      order => order.trackingCode === trackingCode
    )!!
    return findedOrder
  }

  async orderExists(trackingCode: string): Promise<boolean> {
    const order = this.orders.some(order => order.trackingCode === trackingCode)
    return order
  }

  async getAllOrders(): Promise<Order[]> {
    const orders = this.orders
    return orders
  }

  async deleteOrderByTrackingCode(trackingCode: string): Promise<Order> {
    const indexOrder = this.orders.findIndex(order => {
      return order.trackingCode === trackingCode
    })

    const deletedOrder = this.orders.splice(indexOrder, 1)

    return deletedOrder[0]
  }
}
