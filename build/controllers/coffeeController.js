"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCoffee = void 0;
const coffeeList = [
    {
        name: "Espresso",
        description: "Fresh roasted & brewed shot of espresso",
        price: 2.99
    },
    {
        name: "Coffee",
        description: "House brewed blend of coffee",
        price: 1.99
    },
    {
        name: "Latte",
        description: "Organically sourced steamed milk with a shot of our fine espresso",
        price: 4.99
    }
];
const defaultCoffee = (req, res, next) => {
    res.redirect('/coffee');
};
exports.defaultCoffee = defaultCoffee;
