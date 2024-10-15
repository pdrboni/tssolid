type CartItem = { name: string, price: number }
type OrderStatus = 'open' | 'closed'

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Your order cost ${this.total()} and was recieved`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Message sent:', msg);
  }

  saveOrder(): void {
    console.log('Saved with success');
  }

  clear(): void {
    console.log('Cart was clear')
    this._items.length = 0;
  }

  get items(): Readonly<CartItem>[] {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }
}

const cart = new ShoppingCartLegacy();
console.log(cart.orderStatus);
cart.addItem({name: 'Shirt', price: 19.90});
cart.addItem({name: 'Toy', price: 9.90});
cart.addItem({name: 'Milk', price: 30.12});
console.log(cart.items);
console.log(cart.total());
cart.checkout();

console.log(cart.items);
console.log(cart.total());
console.log(cart.orderStatus);
//cart.clear();

