import { Order } from '../../entities/Order'
import { OrderRepository } from '../OrderRepository'

export class InMemoryOrderRepository implements OrderRepository {
  private items: Order[] = []

  async createOrder(order: Order): Promise<void> {
    this.items.push(order)
  }
}
