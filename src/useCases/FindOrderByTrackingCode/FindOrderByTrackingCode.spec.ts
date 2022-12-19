import { Order } from "../../entities/Order"
import { InMemoryOrderRepository } from "../../repositories/inMemory/inMemoryOrderRepository"
import { FindOrderByTrackingCodeUseCase } from "./findOrderByTrackingCodeUseCase"

describe('Find Order By Tracking Code',() => {
  const inMemoryOrderRepository = new InMemoryOrderRepository()
  const findOrderByTrackingCode = new FindOrderByTrackingCodeUseCase(inMemoryOrderRepository)
  it('should be able to find order by trackingCode', async () => {
    const order = await findOrderByTrackingCode.execute('123')
    expect(order).toEqual(order)
  })

  it('should not be able to find the order by the trackingCode which is different from the existing one', async () => {
    const order: Order = {
      trackingCode: '',
      title: 'Order Title',
      description: 'Order Description'
    }
     expect(await findOrderByTrackingCode.execute('789')).not.toEqual(order.trackingCode)
  })
})