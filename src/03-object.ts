interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
};

const car2: Car = {
  brand: 'Mercedes',
  type: '',
  wheels: 4,
  isNew: true,
};

car2.go = true;
// car2['go'] = true; recommended use this style gide when we use new unknown prop
