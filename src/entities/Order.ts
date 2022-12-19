

export class Order {
  trackingCode: string 
  title: string
  description: string

  private constructor({trackingCode, title, description}: Order) {  

    
    return Object.assign(this, { trackingCode, title, description })
  }

  static create({trackingCode, title, description}: Order) {
    const order = new Order({trackingCode, title, description})
  
    return order
  }
}
