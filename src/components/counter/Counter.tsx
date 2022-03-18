import s from './Counter.module.css'
import {Button} from "../button/Button";
import {useState} from "react";

export const Counter = () => {
   let [number, setNumber] = useState<number>(0)
   const disabled = number >= 5;
   const classNumberActive = number === 5 ? s.counter_number__active : '';

   return (
       <div className={s.counter}>
          <h1 className={`${s.counter_number} ${classNumberActive}`}>{number}</h1>
          <div className={s.counter_wrap}>
             <Button text={'inc'} disabled={disabled} onClick={ () => {setNumber(++number) } }/>
             <Button text={'reset'} disabled={!disabled} onClick={ () => {setNumber(0) }}/>
             <Button text={'set'} onClick={ () => {setNumber(0) }}/>
          </div>
       </div>
   );
}
