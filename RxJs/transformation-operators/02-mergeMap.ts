import { of, interval } from 'rxjs';
import { map, take, mergeMap } from 'rxjs/operators';

// Outer Observable emits 3 inner Observables
const letters$ = of('a', 'b', 'c').pipe(
  mergeMap(val => interval(1000).pipe(
    take(3),
    map(i => `${val}+${i}`)
  ))
).subscribe(
    {
        next: val => console.log('next: ', val),
        complete: () => console.log('Complete') 
    }
)
