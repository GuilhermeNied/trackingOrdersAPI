import { Order } from '../../entities/Order'
import { InMemoryOrderRepository } from '../../repositories/inMemory/inMemoryOrderRepository'
import { CreateOrderUseCase } from '../CreateOrder/createOrderUseCase'
import { FindOrderByTrackingCodeUseCase } from './findOrderByTrackingCodeUseCase'

describe('Find Order By Tracking Code', () => {
  let inMemoryOrderRepository: InMemoryOrderRepository
  let createOrderUseCase: CreateOrderUseCase
  let findOrderByTrackingCodeUseCase: FindOrderByTrackingCodeUseCase
  beforeAll(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()
    createOrderUseCase = new CreateOrderUseCase(inMemoryOrderRepository)
    findOrderByTrackingCodeUseCase = new FindOrderByTrackingCodeUseCase(
      inMemoryOrderRepository
    )
  })

  it('should be able to find order by trackingCode', async () => {
    const order: Order = {
      trackingCode: '123',
      title: 'Order Title',
      description: 'Order Description'
    }
    await createOrderUseCase.execute(order)

    const findedOrder = await findOrderByTrackingCodeUseCase.execute(
      order.trackingCode
    )

    expect(findedOrder.trackingCode).toEqual(order.trackingCode)
    expect(findedOrder).toBeInstanceOf(Order)
  })

  it('should not be able to find the order by the trackingCode which is different from the existing one', async () => {
    const order: Order = {
      trackingCode: '',
      title: 'Order Title',
      description: 'Order Description'
    }

    await expect(
      findOrderByTrackingCodeUseCase.execute(order.trackingCode)
    ).rejects.toBeInstanceOf(Error)
  })
})
