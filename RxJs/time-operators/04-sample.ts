
import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const interval$ = interval(1000)
const click$ = fromEvent<PointerEvent>(document, 'click');

interval$.pipe(
    sample(click$) //returs the last value emitted by the interval at the time of the event execution
).subscribe(console.log)
 