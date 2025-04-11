
import { fromEvent, interval } from 'rxjs';
import { tap, map, takeUntil, skip } from 'rxjs/operators';

const button1 = document.createElement('button');
button1.innerHTML = "detener con 1 click"
document.querySelector('body')?.append(button1);

const button2 = document.createElement('button');
button2.innerHTML = "detener con 2 clicks"
document.querySelector('body')?.append(button2);

const click1$ = fromEvent<PointerEvent>(button1, 'click');
//const click2$ = fromEvent<PointerEvent>(button2, 'click');

const counter$ = interval(100);
const counter2$ = interval(100);

counter$.pipe(
    takeUntil(click1$ )
).subscribe({
    next: val => console.log('next 1: ', val),
    complete: () => console.log('Click 1 is complete')
});

const click2$ = fromEvent<PointerEvent>(button2, 'click').pipe(
    tap(() => console.log('before skip')),
    skip(1),
    tap(() => console.log('after skip'))
);

counter2$.pipe(
    takeUntil(click2$ )
).subscribe({
    next: val => console.log('next 2: ', val),
    complete: () => console.log('Click 2 is complete')
});