import { interval, fromEvent, Observable } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');
const interval$ = interval(1000).pipe(take(3));

click$.pipe(
    map<PointerEvent, number>(val => val.x),
    concatMap<number, Observable<string>>(val => interval$.pipe( map(i => `Position X: ${val}, interval: ${i} position x ${val}`)))// Maintains all the subscriptions and displays the emitted value for queued observables
).subscribe(val => console.log(`${val}`))
