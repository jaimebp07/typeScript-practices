
import { from } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

const numbers: number[] = [1,2,3,4,5];

const totalReduce = (accumulator: number, current: number) => {
    return accumulator + current;
}

from(numbers).pipe(
    reduce(totalReduce)
).subscribe({
    next: val => console.log(`next, reduce: ${val}`),
    complete: () => console.log('complete')
})

from(numbers).pipe(
    scan(totalReduce)
).subscribe({
    next: val => console.log(`next, scan: ${val}`),
    complete: () => console.log('complete')
})

interface User {
    name?: string;
    age?: number;
}

const users: User[] = [
    {name: 'Juan'},
    {name: 'Pepito'}
]

const state$ = from(users).pipe(
    scan( (acc, cur) => {
        return { ...acc, ...cur };
    }, { age:33 })
);

state$.subscribe({
    next: val => console.log('next state:', val)
});

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log)