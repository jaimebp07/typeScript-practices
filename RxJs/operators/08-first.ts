
import { fromEvent } from 'rxjs';
import { tap, first, map } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap<PointerEvent>(console.log),
    map(({screenX, screenY}) => ({screenX, screenY})),
    //first() // Returns the firs one that meets with the condition
    first(value => value.screenY >= 150)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})