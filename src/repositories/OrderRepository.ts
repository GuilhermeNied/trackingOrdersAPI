import { Order } from '../entities/Order'

export interface OrderRepository {
  createOrder(order: Order): Promise<void>
  findOrderByTrackingCode(trackingCode: string): Promise<Order>
}
