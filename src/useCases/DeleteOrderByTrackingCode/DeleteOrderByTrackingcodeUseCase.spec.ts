import { Order } from '../../entities/Order'
import { InMemoryOrderRepository } from '../../repositories/inMemory/inMemoryOrderRepository'
import { CreateOrderUseCase } from '../CreateOrder/createOrderUseCase'
import { GetAllOrdersUseCase } from '../GetAllOrders/getAllOrdersUseCase'
import { DeleteOrderByTrackingCodeUseCase } from './deleteOrderByTrackingCodeUseCase'

describe('Delete Order By Tracking Code', () => {
  let inMemoryOrderRepository: InMemoryOrderRepository
  let getAllOrdersUseCase: GetAllOrdersUseCase
  let createOrderUseCase: CreateOrderUseCase
  let deleteOrderByTrackingCodeUseCase: DeleteOrderByTrackingCodeUseCase

  beforeAll(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()
    createOrderUseCase = new CreateOrderUseCase(inMemoryOrderRepository)
    getAllOrdersUseCase = new GetAllOrdersUseCase(inMemoryOrderRepository)
    deleteOrderByTrackingCodeUseCase = new DeleteOrderByTrackingCodeUseCase(
      inMemoryOrderRepository
    )
  })

  it('should be able to delete order by tracking code', async () => {
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

    await deleteOrderByTrackingCodeUseCase.execute('123')

    expect(allOrders).toHaveLength(1)
  })

  it('should not be able to delete order by tracking code', async () => {
    const order1: Order = {
      trackingCode: '123',
      title: 'Order Title1',
      description: 'Order Description1'
    }

    await createOrderUseCase.execute(order1)

    await expect(
      deleteOrderByTrackingCodeUseCase.execute('789')
    ).rejects.toBeInstanceOf(Error)
  })
})
