import { Order } from '../../entities/Order'
import { InMemoryOrderRepository } from '../../repositories/inMemory/inMemoryOrderRepository'
import { CreateOrderUseCase } from './createOrderUseCase'

describe('Create Order', () => {
  let inMemoryOrderRepository: InMemoryOrderRepository
  let createOrderUseCase: CreateOrderUseCase
  beforeAll(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()
    createOrderUseCase = new CreateOrderUseCase(inMemoryOrderRepository)
  })

  it('should be able to create an order', async () => {
    const order: Order = {
      trackingCode: '123',
      title: 'Order Title',
      description: 'Order Description'
    }
    const createdOrder = await createOrderUseCase.execute(order)

    expect(createdOrder).toBeInstanceOf(Order)
  })

  it('should not be able to create an oder when trackingCode is empty', async () => {
    const order: Order = {
      trackingCode: '',
      title: 'Order Title',
      description: 'Order Description'
    }
    await expect(createOrderUseCase.execute(order)).rejects.toBeInstanceOf(
      Error
    )
  })

  it('should not be able to create an oder when title is empty', async () => {
    const order: Order = {
      trackingCode: '123',
      title: '',
      description: 'Order Description'
    }

    await expect(createOrderUseCase.execute(order)).rejects.toBeInstanceOf(
      Error
    )
  })

  it('should not be able to create an order an existing order', async () => {
    const order: Order = {
      trackingCode: '12345',
      title: 'Order title existing',
      description: 'Order Description existing'
    }

    await createOrderUseCase.execute(order)

    await expect(createOrderUseCase.execute(order)).rejects.toBeInstanceOf(
      Error
    )
  })
})
