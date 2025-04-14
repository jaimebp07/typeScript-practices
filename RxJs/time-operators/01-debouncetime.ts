
import { fromEvent, interval } from 'rxjs';
import { tap, map, takeUntil, skip, debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
click$.pipe(
    debounceTime(3000)
)//.subscribe(console.log)

const input = document.createElement('input');
document.querySelector('body')?.append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(1000),
    map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
    distinctUntilChanged()
).subscribe(console.log)
