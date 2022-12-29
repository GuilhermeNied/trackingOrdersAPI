import { prismaClient } from '../../database/prismaClient'
import { Order } from '../../entities/Order'
import { OrderRepository } from '../OrderRepository'

export class ImplementationOrderRepository implements OrderRepository {
  async createOrder(order: Order): Promise<Order> {
    const { trackingCode, title, description } = order
    try {
      const createdOrder = await prismaClient.order.create({
        data: {
          trackingCode,
          title,
          description
        }
      })
      return createdOrder
    } catch (error) {
      throw new Error('Error in create order')
    }
  }

  async findOrderByTrackingCode(trackingCode: string): Promise<Order> {
    try {
      const findedOrder = await prismaClient.order.findUnique({
        where: {
          trackingCode
        }
      })

      return findedOrder!!
    } catch (error) {
      throw new Error('Error to find order')
    }
  }

  async orderExists(trackingCode: string): Promise<boolean> {
    const orderExists = await prismaClient.order.findUnique({
      where: {
        trackingCode
      }
    })

    return !!orderExists
  }
  async getAllOrders(): Promise<Order[]> {
    try {
      const orders = await prismaClient.order.findMany()
      return orders
    } catch (error) {
      throw new Error('Error to get orders')
    }
  }
  deleteOrderByTrackingCode(trackingCode: string): Promise<Order> {
    throw new Error('Method not implemented.')
  }
  updateOrder({ trackingCode, title, description }: Order): Promise<Order> {
    throw new Error('Method not implemented.')
  }
}
