import { InMemoryOrderRepository } from '../repositories/inMemory/inMemoryOrderRepository'
import { CreateOrderUseCase } from '../useCases/CreateOrder/createOrderUseCase'
import { FindOrderByTrackingCodeUseCase } from '../useCases/FindOrderByTrackingCode/findOrderByTrackingCodeUseCase'
import { Order } from './Order'

interface OrderTest {
  trackingCode: string
  title: string
  description: string
}

describe('Create Order', () => {
  const inMemoryOrderRepository = new InMemoryOrderRepository()
  const createOrder = new CreateOrderUseCase(inMemoryOrderRepository)
  it('should be able to create an order', () => {
    const order: OrderTest = {
      trackingCode: '123',
      title: 'Order Title',
      description: 'Order Description'
    }
    const orders: OrderTest[] = [order]

    createOrder.execute({
      trackingCode: '123',
      title: 'Order Title',
      description: 'Order Description'
    })

    expect(orders).toContain(order)
  })

  it('should not be able to create an oder when trackingCode is empty', () => {
    expect(
      createOrder.execute({
        trackingCode: '',
        title: 'Order Title',
        description: 'Order Description'
      })
    ).rejects.toBeInstanceOf(Error)
  })

  it('should not be able to create an oder when title is empty', () => {
    expect(
      createOrder.execute({
        trackingCode: '123',
        title: '',
        description: 'Order Description'
      })
    ).rejects.toBeInstanceOf(Error)
  })
})


describe('Find Order By Tracking Code',() => {
  const inMemoryOrderRepository = new InMemoryOrderRepository()
  const findOrderByTrackingCode = new FindOrderByTrackingCodeUseCase(inMemoryOrderRepository)
  it('should be able to find order by trackingCode', () => {
    return findOrderByTrackingCode.execute('123').then(order => {
      expect(order).toEqual(order)
    })
  })

  it('should not be able to find the order by the trackingCode which is different from the existing one', async () => {

    const order: OrderTest = {
      trackingCode: '',
      title: 'Order Title',
      description: 'Order Description'
    }
     expect(await findOrderByTrackingCode.execute('789')).not.toEqual(order.trackingCode)
  })
})
