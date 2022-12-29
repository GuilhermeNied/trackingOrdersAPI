import { ImplementationOrderRepository } from '../../repositories/implementation/ImplementationOrderRepository'
import { DeleteOrderByTrackingCodeController } from './deleteOrderByTrackingCodeController'
import { DeleteOrderByTrackingCodeUseCase } from './deleteOrderByTrackingCodeUseCase'

const implementationOrderRepository = new ImplementationOrderRepository()

const deleteOrderByTrackingCodeUseCase = new DeleteOrderByTrackingCodeUseCase(
  implementationOrderRepository
)

const deleteOrderByTrackingCodeController =
  new DeleteOrderByTrackingCodeController(deleteOrderByTrackingCodeUseCase)

export { deleteOrderByTrackingCodeController }
