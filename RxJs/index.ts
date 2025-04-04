import { Observable, of, Observer } from "rxjs";

const products = [
  { name: "Apple", price: 1.99, inStock: true },
  { name: "Orange", price: 1.49, inStock: false },
  { name: "Banana", price: 0.99, inStock: true },
];

const obs$ = of(...products);

obs$.subscribe({
    next: value => console.log(`name: ${value.name}  price: ${value.price} `),
    error: err => console.log('error:', err),
    complete:() => console.log("we finish the sequence ")
})
