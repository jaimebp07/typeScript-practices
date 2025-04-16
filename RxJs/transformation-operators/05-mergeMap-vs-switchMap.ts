import { interval, fromEvent, Observable } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    map<PointerEvent, number>(val => val.x),
    //mergeMap<number, Observable<string>>(val => interval$.pipe( map(i => `Position X: ${val}, interval: ${i} position x ${val}`)))//maintains many subscription
    
    switchMap<number, Observable<string>>(val => interval$.pipe( map(i => `Position X: ${val}, interval: ${i} position x ${val}`)))// keeps only the subscription to the last observable
).subscribe(val => console.log(`${val}`))
