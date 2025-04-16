import { of, interval, fromEvent } from 'rxjs';
import { map, take, mergeMap, takeUntil, tap } from 'rxjs/operators';

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    tap(x => console.log("x", x)),
    mergeMap(() => interval$.pipe(
            tap(x => console.log(x)), //The exercise is not working
            takeUntil(mouseup$)
        )
    )
).subscribe(val => console.log(`The user pressed the mouse for ${val} seconds`))
