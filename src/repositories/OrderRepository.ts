import { Order } from '../entities/Order'

export interface OrderRepository {
  createOrder(order: Order): Promise<Order>
  findOrderByTrackingCode(trackingCode: string): Promise<Order>
  orderExists(trackingCode: string): Promise<boolean>
  getAllOrders(): Promise<Order[]>
  deleteOrderByTrackingCode(trackingCode: string): Promise<Order>
}
