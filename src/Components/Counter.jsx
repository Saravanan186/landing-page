import react,{useState} from 'react';

const Counter = () => {
    const [count,setcount]= useState(0);

const increment = () => setcount(count + 1);
const decrement = () => setcount(count - 1);
const reset = () => setcount(0);

return(
     <div>
        <h1>count:{count}</h1>
        <button onClick ={increment} className="bg-red-400 p-2">increment</button>

        <button onClick ={decrement} className="bg-blue-400 p-2">decriment</button>
        <button onClick ={reset} className="bg-gray-400 p-2">reset</button>
     </div>

);
}
export default Counter