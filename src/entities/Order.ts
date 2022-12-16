interface OrderProps {
  trackingCode: string
  title: string
  description: string
}

export class Order {
  private props: OrderProps

  get trackingCode(): string {
    return this.props.trackingCode
  }

  get title(): string {
    return this.props.trackingCode
  }

  get description(): string {
    return this.props.trackingCode
  }

  constructor(props: OrderProps) {
    const { trackingCode, title } = props

    if (trackingCode === '') {
      throw new Error('Tracking code is required')
    }

    if (title === '') {
      throw new Error('Title is required')
    }

    this.props = props
  }
}
