import { Order } from '../../entities/Order'
import { InMemoryOrderRepository } from '../../repositories/inMemory/inMemoryOrderRepository'
import { CreateOrderUseCase } from '../CreateOrder/createOrderUseCase'
import { GetAllOrdersUseCase } from '../GetAllOrders/getAllOrdersUseCase'
import { UpdateOrderUseCase } from './updateOrderUseCase'

describe('Update Order', () => {
  let inMemoryOrderRepository: InMemoryOrderRepository
  let createOrderUseCase: CreateOrderUseCase
  let updateOrderUseCase: UpdateOrderUseCase
  let getAllOrders: GetAllOrdersUseCase
  beforeAll(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository()
    createOrderUseCase = new CreateOrderUseCase(inMemoryOrderRepository)
    updateOrderUseCase = new UpdateOrderUseCase(inMemoryOrderRepository)
    getAllOrders = new GetAllOrdersUseCase(inMemoryOrderRepository)
  })

  it('should be able to update order', async () => {
    const order: Order = {
      trackingCode: '123',
      title: 'Order Title',
      description: 'Order Description'
    }

    const orderToUpdate: Order = {
      trackingCode: '123',
      title: 'Order Title2',
      description: 'Order Description2'
    }

    await createOrderUseCase.execute(order)

    await updateOrderUseCase.execute(orderToUpdate)

    const allOrders = await getAllOrders.execute()

    expect(allOrders[0].title).toEqual('Order Title2')
    expect(allOrders[0].description).toEqual('Order Description2')
  })

  it('should be not able to update order when trackingCode is empty', async () => {
    const order: Order = {
      trackingCode: '456',
      title: 'Order Title',
      description: 'Order Description'
    }

    await createOrderUseCase.execute(order)

    const orderToUpdate: Order = {
      trackingCode: '',
      title: 'Order Title2',
      description: 'Order Description2'
    }

    await expect(
      updateOrderUseCase.execute(orderToUpdate)
    ).rejects.toBeInstanceOf(Error)
  })

  it('should be not able to update order when title is empty', async () => {
    const order: Order = {
      trackingCode: '789',
      title: 'Order Title',
      description: 'Order Description'
    }

    await createOrderUseCase.execute(order)

    const orderToUpdate: Order = {
      trackingCode: '789',
      title: '',
      description: 'Order Description2'
    }

    await expect(
      updateOrderUseCase.execute(orderToUpdate)
    ).rejects.toBeInstanceOf(Error)
  })
})
