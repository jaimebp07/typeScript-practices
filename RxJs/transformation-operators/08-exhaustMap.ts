import { interval, fromEvent, Observable } from 'rxjs';
import { concatMap, exhaustMap, map, take } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');
const interval$ = interval(1000).pipe(take(3));

click$.pipe(
    map<PointerEvent, number>(val => val.x),
    exhaustMap<number, Observable<string>>(val => interval$.pipe( map(i => `Position X: ${val}, interval: ${i} position x ${val}`)))// It keeps all the subscription to be executed in the queued but when the first subscription are completed the values of second subscription not display from first value, but from the emmited in there time
).subscribe(val => console.log(`${val}`))
