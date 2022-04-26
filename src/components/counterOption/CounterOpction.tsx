import s from './CounterOption.module.css';
import React, {ChangeEvent} from "react";
import {Input} from "../input/Input";
import {addMaxNumberAT, addMinNumberAT, addNumberAT} from "../../bll/counter-reducer/counter-reduser";
import {useDispatch, useSelector} from "react-redux";
import {state} from "../../bll/redux-store";

type CounterOptionType = {
}

export const CounterOption: React.FC<CounterOptionType> = () => {
   const dispatch = useDispatch()
   const maxNumber = useSelector<state, number>(state => state.counter.maxNumber)
   const minNumber = useSelector<state, number>(state => state.counter.minNumber)
   const errorMaxInput = maxNumber < minNumber
   const errorMinInput = minNumber < 0 || minNumber > maxNumber;

   if (errorMaxInput) {
      dispatch(addMaxNumberAT(5))
   }

   if (errorMinInput) {
      dispatch(addMinNumberAT(0))
   }

   const editMaxNumber = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(addMaxNumberAT(+e.currentTarget.value))
   }

   const editMinNumber = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(addMinNumberAT(+e.currentTarget.value))
      dispatch(addNumberAT(+e.currentTarget.value))
   }

   return (
       <div className={s.CounterOption}>
          <Input textLabel={'Max Number'} value={maxNumber} onChange={editMaxNumber}/>
          <Input textLabel={'Min Number'} value={minNumber} onChange={editMinNumber}/>
       </div>
   )
}
