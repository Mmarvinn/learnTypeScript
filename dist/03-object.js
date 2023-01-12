"use strict";
const car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
};
const car2 = {
    brand: 'Mercedes',
    type: '',
    wheels: 4,
    isNew: true,
};
car2.go = true;
// car2['go'] = true; recommended use this style gide when we use new unknown prop
