import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('completado')
};


const intervalo$ = new Observable<number>( subscriber => {

    const intervalID = setInterval( () => {
        subscriber.next(Math.random())

    }, 3000);

    return () => clearInterval(intervalID);

});

const subject$ = new Subject()
intervalo$.subscribe(subject$)

const subs1 = subject$.subscribe( rnd => console.log('Sub 1 ', rnd) );
const subs2 = subject$.subscribe( rnd => console.log('Sub 2 ', rnd)  );
