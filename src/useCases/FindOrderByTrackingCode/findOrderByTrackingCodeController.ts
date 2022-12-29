import { Request, Response } from 'express'
import { FindOrderByTrackingCodeUseCase } from './findOrderByTrackingCodeUseCase'

export class FindOrderByTrackingCodeController {
  constructor(
    private findOrderByTrackingCodeUseCase: FindOrderByTrackingCodeUseCase
  ) {}

  async handle(req: Request,res: Response, trackingCode: string): Promise<Response> {
    try {
      const findedOrder = await this.findOrderByTrackingCodeUseCase.execute(
        trackingCode
      )
      return res.status(200).send(findedOrder)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
