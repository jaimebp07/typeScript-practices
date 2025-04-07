import { fromEvent } from "rxjs";

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: (val: any) => console.log('next', val)
};

src1$.subscribe(observer)
src2$.subscribe(observer)