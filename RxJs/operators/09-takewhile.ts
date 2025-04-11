
import { fromEvent } from 'rxjs';
import { tap, map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap<PointerEvent>(console.log),
    map(({x, y}) => ({x, y})),
    takeWhile(({y}) => y >= 150, true )// el true sirve para incluir el ultimo valor
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})