import { fromEvent } from "rxjs";
import { auditTime, } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    auditTime(5000)// Returns the last emitted value each time the time is completted
).subscribe(console.log)