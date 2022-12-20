import { Order } from "../../entities/Order";
import { OrderRepository } from "../../repositories/OrderRepository";

export class FindOrderByTrackingCodeUseCase {
  constructor(private orderRepository: OrderRepository) {}
  async execute(trackingCode: string): Promise<Order> {
    const findedOrder = await this.orderRepository.findOrderByTrackingCode(trackingCode);
    const orderExists = await this.orderRepository.orderExists(trackingCode);
    if (!orderExists) {
      throw new Error("Order does not exist");
      
    }
    return findedOrder
  }
}