import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('completed')
};


const intervalo$ = new Observable<number>( subscriber => {

    const intervalID = setInterval( () => {
        subscriber.next(Math.random())

    }, 2000);

    return () => {
        clearInterval(intervalID);
        console.log("finished interval")
    }

});

const subject$ = new Subject()
const subscription = intervalo$.subscribe(subject$)

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

//Inyectar datos en el observable
//Cold observable: Cuando la data es producida dentro del observable.
// Hot observable: Cuando la data es producida fuera del observable.
setTimeout(() => {
    subject$.next(10)
    subject$.complete()
    subscription.unsubscribe();
}, 6500)

