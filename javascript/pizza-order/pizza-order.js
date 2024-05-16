/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  
  const basePrice = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10,
  };
  const extrasPrice = {
    'ExtraToppings': 2,
    'ExtraSauce': 1
  };
  let totalPrice = basePrice[pizza] || 0;

  extras.forEach(extra =>{
    totalPrice += extrasPrice[extra] || 0;
  });
  return totalPrice
};

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  class PizzaOrder {
    constructor(pizza, ...extras) {
      this.pizza = pizza;
      this. extras = extras;
    }
  }
  
  const basePrice = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10,
  };
  
  const extrasPrice = {
    'ExtraToppings': 2,
    'ExtraSauce': 1
  };

  let totalPrice = 0;

  for (let order of pizzaOrders) {
    let pizzaPrice = basePrice[order.pizza] || 0;

    order.extras.forEach(extra => {
      pizzaPrice += extrasPrice[extra] || 0;
    });

    totalPrice += pizzaPrice;
  }
  
  return totalPrice;

}
