import s from './Counter.module.css'
import {Button} from "../button/Button";
import {useState} from "react";

export const Counter = () => {
   let [number, setNumber] = useState<number>(0)
   const disabledOne = number >= 5;
   const disabledTwo = number <= 0;

   return (
       <div className={s.counter}>
          <h1 className={s.counter_number}>{number}</h1>
          <div className={s.counter_wrap}>
             <Button text={'inc'} disabled={disabledOne} onClick={ () => {setNumber(++number) } }/>
             <Button text={'reset'} disabled={disabledTwo} onClick={ () => {setNumber(0) }}/>
          </div>
       </div>
   );
}
