/*
Interface Segregation Principle:
Os clientes não devem ser forçados a depender de types, interfaces ou membros abstratos que não utilizam
*/

import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shoppingCart";
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";


const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const individualCustomer = new IndividualCustomer('Pedro', 'Coni', '333.333.333-33')
const enterpriseCustomer = new EnterpriseCustomer('Empresa Legal', '888.888.888-88')

const cart = new ShoppingCart(noDiscount);
const persistency = new Persistency();
const order = new Order(cart, persistency, enterpriseCustomer)
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
//cart.clear();
