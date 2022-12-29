import { ImplementationOrderRepository } from '../../repositories/implementation/ImplementationOrderRepository'
import { UpdateOrderController } from './updateOrderController'
import { UpdateOrderUseCase } from './updateOrderUseCase'

const implementationOrderRepository = new ImplementationOrderRepository()

const updateOrderUseCase = new UpdateOrderUseCase(implementationOrderRepository)

const updateOrderController = new UpdateOrderController(updateOrderUseCase)

export { updateOrderController }
