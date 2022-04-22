import s from './Counter.module.css'
import {Button} from "../button/Button";
import {useEffect, useState} from "react";
import {CounterOption} from "../counterOption/CounterOpction";

export const Counter = () => {
   const [maxNumber, setMaxNumber] = useState<number>(5)
   const [minNumber, setMinNumber] = useState<number>(0)
   const [number, setNumber] = useState<number>(minNumber)
   const [isShow, setIsShow] = useState<boolean>(true);

   const showOption = () => setIsShow(!isShow)
   const addNumber = () => setNumber(number + 1)
   const resetCounterNumber = () => {
      setNumber(minNumber)
      localStorage.setItem("counterValue", JSON.stringify(minNumber))
   }

   useEffect(() => {
      const value = localStorage.getItem("counterValue");
      const valueMax = localStorage.getItem("counterMaxValue");
      const valueMin = localStorage.getItem("counterMinValue");
      value && setNumber(JSON.parse(value))
      valueMax && setMaxNumber(JSON.parse(valueMax))
      valueMin && setMinNumber(JSON.parse(valueMin))
   }, [])

   useEffect(() => {
      localStorage.setItem("counterValue", JSON.stringify(number))
   }, [number])

   const disabledInc = number >= maxNumber;
   const disabledReset = number === minNumber;
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
             {isShow && <Button disabled={disabledInc} onClick={addNumber}>inc</Button>}
             {isShow && <Button disabled={disabledReset} onClick={resetCounterNumber}>reset</Button>}

             <Button onClick={showOption}>set</Button>
          </div>
       </div>
   );
}
