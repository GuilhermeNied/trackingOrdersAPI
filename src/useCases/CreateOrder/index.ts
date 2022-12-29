import { ImplementationOrderRepository } from '../../repositories/implementation/ImplementationOrderRepository'
import { CreateOrderController } from './createOrderController'
import { CreateOrderUseCase } from './createOrderUseCase'

const implementationOrderRepository = new ImplementationOrderRepository()

const createOrderUseCase = new CreateOrderUseCase(implementationOrderRepository)

const createOrderController = new CreateOrderController(createOrderUseCase)

export { createOrderController }
