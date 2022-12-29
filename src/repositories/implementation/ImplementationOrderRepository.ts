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
  async deleteOrderByTrackingCode(trackingCode: string): Promise<Order> {
    try {
      const deletedOrder = await prismaClient.order.delete({
        where: {
          trackingCode
        }
      })

      return deletedOrder
    } catch (error) {
      throw new Error('Error to delete order')
    }
  }

  async updateOrder({
    trackingCode,
    title,
    description
  }: Order): Promise<Order> {
    try {
      const updatedOrder = await prismaClient.order.update({
        where: {
          trackingCode
        },
        data: {
          title,
          description
        }
      })

      return updatedOrder
    } catch (error) {
      throw new Error('Error to update order')
    }
  }
}
