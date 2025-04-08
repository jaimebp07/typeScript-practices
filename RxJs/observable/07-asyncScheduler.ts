import { asyncScheduler } from "rxjs";

interface Person  {
  name: string
}
const greet = () => console.log("hello");
const greet2 = (person?: Person) => console.log(`hello, ${person?.name}`);

//asyncScheduler.schedule(greet2, 3000, { name: 'juan' });

const subs = asyncScheduler.schedule( function(state) { 
  console.log('state', state)

    if(state != undefined) {
    this.schedule(state + 1, 1000)
  } else {
    console.log("the state is undefine");
  }
}, 3000, 0)

asyncScheduler.schedule(() => subs.unsubscribe(), 7000);