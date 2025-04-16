import { of, interval } from 'rxjs';
import { map, take, mergeAll } from 'rxjs/operators';

// Outer Observable emits 3 inner Observables
const outer$ = of(1, 2, 3).pipe(
  map(val => interval(1000).pipe(
    take(3),
    map(i => `Stream ${val}: ${i}`)
  ))
);

// Using mergeAll to flatten the inner Observables into a single stream

outer$.subscribe(value => console.log("sin mergeAll() ", value));

outer$.pipe(
  mergeAll() //the mergeAll() operator returns the values that are in observable that returns an observable
).subscribe(value => console.log("con mergeAll() ", value));