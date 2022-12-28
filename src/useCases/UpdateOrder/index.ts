import { ImplementationOrderRepository } from "../../repositories/implementation/ImplementationOrderRepository";
import { CreateOrderController } from "../CreateOrder/createOrderController";
import { CreateOrderUseCase } from "../CreateOrder/createOrderUseCase";

const implmentationOrderRepostiory = new ImplementationOrderRepository()
const createOrderUseCase = new CreateOrderUseCase(implmentationOrderRepostiory)

const createOrderController = new CreateOrderController(createOrderUseCase)

export { createOrderController }