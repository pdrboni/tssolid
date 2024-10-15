/*
  Se f(x) é uma propriedade demonstrável dos objetos x de tipo T. Então f(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

  Mais simples: Subtipos precisam ser substituíveis por seus tipos base.
  Mais simples ainda: Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/

import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shoppingCart";
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "./classes/discount";


const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const cart = new ShoppingCart(noDiscount);
const persistency = new Persistency();
const order = new Order(cart, persistency)
console.log(order.orderStatus);

cart.addItem(new Product('Shirt', 19.90));
cart.addItem(new Product('Toy', 9.90));
cart.addItem(new Product('Milk', 30.12));

console.log(cart.items);
 console.log(cart.total());
 console.log(cart.totalWithDiscount());
order.checkout();

console.log(cart.items);
console.log(cart.total());
console.log(order.orderStatus);
//cart.clear();
