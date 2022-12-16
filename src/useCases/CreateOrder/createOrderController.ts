import { Request, Response } from 'express'
import { CreateOrderUseCase } from './createOrderUseCase'

export class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { trackingCode, title, description } = req.body

    try {
      await this.createOrderUseCase.execute({
        trackingCode,
        title,
        description
      })
      return res.status(201).send()
    } catch (err: any) {
      return res.status(500).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
