import { ImplementationOrderRepository } from '../../repositories/implementation/ImplementationOrderRepository'
import { GetAllOrdersController } from './getAllOrderController'
import { GetAllOrdersUseCase } from './getAllOrdersUseCase'

const implementationOrderRepository = new ImplementationOrderRepository()
const getAllOrdersUseCase = new GetAllOrdersUseCase(
  implementationOrderRepository
)
const getAllOrdersController = new GetAllOrdersController(getAllOrdersUseCase)

export { getAllOrdersController }
