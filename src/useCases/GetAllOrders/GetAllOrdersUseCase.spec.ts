import { Order } from '../../entities/Order'
import { InMemoryOrderRepository } from '../../repositories/inMemory/inMemoryOrderRepository'
import { CreateOrderUseCase } from '../CreateOrder/createOrderUseCase'
import { GetAllOrdersUseCase } from './getAllOrdersUseCase'

describe('Get All Orders', () => {
  let inMemoryOrderRepository: InMemoryOrderRepository
  let getAllOrdersUseCase: GetAllOrdersUseCase
  let createOrderUseCase: CreateOrderUseCase
  beforeAll(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()
    getAllOrdersUseCase = new GetAllOrdersUseCase(inMemoryOrderRepository)
    createOrderUseCase = new CreateOrderUseCase(inMemoryOrderRepository)
  })

  it('should be able to get all orders', async () => {
    const order1: Order = {
      trackingCode: '123',
      title: 'Order Title1',
      description: 'Order Description1'
    }

    const order2: Order = {
      trackingCode: '456',
      title: 'Order Title2',
      description: 'Order Description2'
    }

    await createOrderUseCase.execute(order1)
    await createOrderUseCase.execute(order2)

    const allOrders = await getAllOrdersUseCase.execute()

    expect(allOrders).toHaveLength(2)
    expect(allOrders[0].trackingCode).toEqual('123')
    expect(allOrders[1].trackingCode).toEqual('456')
  })
})
