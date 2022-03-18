import s from './Counter.module.css'
import {Button} from "../button/Button";
import {useState} from "react";
import {CounterOption} from "../counterOption/CounterOpction";

export const Counter = () => {
   const [maxNumber, setMaxNumber] = useState<number>(5)
   const [minNumber, setMinNumber] = useState<number>(0)
   let [number, setNumber] = useState<number>(minNumber)
   const [isShow, setIsShow] = useState<boolean>(true);

   const showOption = () => setIsShow(!isShow);
   const addNumber = () => setNumber(++number);
   const resetCounterNumber = () => setNumber(minNumber);

   const disabled = number >= maxNumber;
   const classNumberActive = number === maxNumber ? s.counter_number__active : '';

   return (
       <div className={s.counter}>
          <div className={s.counter_wrap}>
             {isShow && <h1 className={`${s.counter_number} ${classNumberActive}`}>{number}</h1>}
             {!isShow &&
                <CounterOption
                   setNumber={setNumber}
                   maxNumber={maxNumber}
                   setMaxNumber={setMaxNumber}
                   minNumber={minNumber}
                   setMinNumber={setMinNumber}/>}
          </div>

          <div className={s.counter_buttons}>
             {isShow && <Button text={'inc'} disabled={disabled} onClick={addNumber}/>}
             {isShow && <Button text={'reset'} disabled={!disabled} onClick={resetCounterNumber}/>}

             <Button text={'set'} onClick={showOption}/>
          </div>
       </div>
   );
}
