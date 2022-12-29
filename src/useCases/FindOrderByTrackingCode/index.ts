import { ImplementationOrderRepository } from '../../repositories/implementation/ImplementationOrderRepository'
import { FindOrderByTrackingCodeController } from './findOrderByTrackingCodeController'
import { FindOrderByTrackingCodeUseCase } from './findOrderByTrackingCodeUseCase'

const implementationOrderRepository = new ImplementationOrderRepository()

const findOrderByTrackingCodeUseCase = new FindOrderByTrackingCodeUseCase(
  implementationOrderRepository
)

const findOrderByTrackingCodeController = new FindOrderByTrackingCodeController(
  findOrderByTrackingCodeUseCase
)

export { findOrderByTrackingCodeController }
