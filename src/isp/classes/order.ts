import { OrderStatus } from "./interfaces/orderStatus";
import { ShoppingCart } from "./shoppingCart";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  //
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }

    Messaging.sendMessage(`Your order cost ${this.cart.totalWithDiscount()} and was recieved`);
    this.persistency.saveOrder();
    this.cart.clear();
    this._orderStatus = 'closed';
  }

}
