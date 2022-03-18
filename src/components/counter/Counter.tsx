import s from './Counter.module.css'
import {Button} from "../button/Button";
import {useState} from "react";

export const Counter = () => {
   let [number, setNumber] = useState<number>(0)
   const [isShow, serIsShow] = useState<boolean>(true);

   const showOption = () => serIsShow(!isShow);
   const addNumber = () => setNumber(++number);
   const resetCounterNumber = () => setNumber(0);

   const disabled = number >= 5;
   const classNumberActive = number === 5 ? s.counter_number__active : '';

   return (
       <div className={s.counter}>
          <div className={s.counter_wrap}>
             {isShow && <h1 className={`${s.counter_number} ${classNumberActive}`}>{number}</h1>}
          </div>

          <div className={s.counter_buttons}>
             <Button text={'inc'} isShow={!isShow} disabled={disabled} onClick={addNumber}/>
             <Button text={'reset'} isShow={!isShow} disabled={!disabled} onClick={resetCounterNumber}/>
             <Button text={'set'} onClick={showOption}/>
          </div>
       </div>
   );
}



const Input = () => {
   return (
       <div className={s.input}>

       </div>

   )
}
