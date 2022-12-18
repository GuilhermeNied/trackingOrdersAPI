import { Order } from "../../entities/Order";
import { OrderRepository } from "../../repositories/OrderRepository";

export class FindOrderByTrackingCodeUseCase {
  constructor(private orderRepository: OrderRepository) {}
  async execute(trackingCode: string): Promise<Order> {
    const findedOrder = await this.orderRepository.findOrderByTrackingCode(trackingCode);
    return findedOrder
  }
}