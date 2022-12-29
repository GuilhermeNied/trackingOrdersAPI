import { Request, Response } from 'express'
import { DeleteOrderByTrackingCodeUseCase } from './deleteOrderByTrackingCodeUseCase'

export class DeleteOrderByTrackingCodeController {
  constructor(
    private deleteOrderByTrackingUseCase: DeleteOrderByTrackingCodeUseCase
  ) {}

  async handle(
    req: Request,
    res: Response,
    trackingCode: string
  ): Promise<Response> {
    try {
      const deletedOrder = await this.deleteOrderByTrackingUseCase.execute(
        trackingCode
      )
      return res.status(200).send(deletedOrder)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}
