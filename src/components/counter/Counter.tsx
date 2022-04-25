import s from './Counter.module.css'
import {Button} from "../button/Button";
import {useEffect} from "react";
import {CounterOption} from "../counterOption/CounterOpction";
import {useDispatch, useSelector} from "react-redux";
import {
   addMaxNumberAT,
   addMinNumberAT,
   addNumberAT,
   showrOptionCounterAT
} from "../../bll/counter-reducer/counter-reduser";
import {state} from "../../bll/redux";

export const Counter = () => {
   const dispatch = useDispatch()
   const number = useSelector<state, number>(state => state.counter.number)
   const maxNumber = useSelector<state, number>(state => state.counter.maxNumber)
   const minNumber = useSelector<state, number>(state => state.counter.minNumber)
   const isShow = useSelector<state, boolean>(state => state.counter.isShow)

   const showOption = () => dispatch(showrOptionCounterAT(!isShow))
   const addNumber = () => dispatch(addNumberAT(number + 1))
   const resetCounterNumber = () => dispatch(addNumberAT(minNumber))

   useEffect(() => {
      const value = localStorage.getItem("counterValue");
      const valueMax = localStorage.getItem("counterMaxValue");
      const valueMin = localStorage.getItem("counterMinValue");

      value && dispatch(addNumberAT(JSON.parse(value)))
      valueMax && dispatch(addMaxNumberAT(JSON.parse(valueMax)))
      valueMin && dispatch(addMinNumberAT(JSON.parse(valueMin)))
   }, [])

   useEffect(() => {
      localStorage.setItem("counterValue", JSON.stringify(number))
   }, [number])

   useEffect(() => {
      localStorage.setItem('counterMaxValue', JSON.stringify(maxNumber))
      localStorage.setItem('counterMinValue', JSON.stringify(minNumber))
      localStorage.setItem('counterValue', JSON.stringify(minNumber))
   }, [maxNumber, minNumber])

   const disabledInc = number >= maxNumber;
   const disabledReset = number === minNumber;
   const classNumberActive = number === maxNumber ? s.counter_number__active : '';

   return (
       <div className={s.counter}>
          <div className={s.counter_wrap}>
             {isShow && <h1 className={`${s.counter_number} ${classNumberActive}`}>{number}</h1>}
             {!isShow && <CounterOption/>}
          </div>

          <div className={s.counter_buttons}>
             {isShow && <Button disabled={disabledInc} onClick={addNumber}>inc</Button>}
             {isShow && <Button disabled={disabledReset} onClick={resetCounterNumber}>reset</Button>}
             <Button onClick={showOption}>set</Button>
          </div>
       </div>
   );
}
