
import { interval, reduce } from 'rxjs';
import {take} from 'rxjs/operators'

const numbers: number[] = [1,2,3,4,5];

const totalReduce = (accumulator: number, current: number) => {
    return accumulator + current;
}

const total = numbers.reduce(totalReduce, 0);
console.log("🚀 ~ total:", total)


interval(1000).pipe(
    take(4),
    reduce(totalReduce)
).subscribe({
    next: val => console.log(`next: ${val}`),
    complete: () => console.log('complete')
})


