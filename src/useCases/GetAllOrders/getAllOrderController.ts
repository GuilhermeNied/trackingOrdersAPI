import { Request, Response } from 'express'
import { GetAllOrdersUseCase } from './getAllOrdersUseCase'

export class GetAllOrdersController {
  constructor(private getAllOrdersUseCase: GetAllOrdersUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const allOrders = await this.getAllOrdersUseCase.execute()
      return res.status(200).send(allOrders)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
