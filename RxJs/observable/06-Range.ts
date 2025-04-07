import { range } from "rxjs";

const src1$ = range(5)

const observer = {
  next: (val: any) => console.log('next', val)
};

src1$.subscribe(observer)