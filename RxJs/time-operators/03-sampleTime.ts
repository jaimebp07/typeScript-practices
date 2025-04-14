
import { fromEvent } from 'rxjs';
import {  map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    map(({x, y}) => ({x, y})),
    sampleTime(2000) //will return the first event within a 2 second time interval
).subscribe(console.log)
 