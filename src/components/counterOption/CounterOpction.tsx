import s from './CounterOption.module.css';
import React, {ChangeEvent, Dispatch, SetStateAction, useEffect} from "react";
import {Input} from "../input/Input";

type CounterOptionType = {
   maxNumber: number
   minNumber: number
   setNumber: Dispatch<SetStateAction<number>>
   setMaxNumber: Dispatch<SetStateAction<number>>
   setMinNumber: Dispatch<SetStateAction<number>>
}

export const CounterOption: React.FC<CounterOptionType> = (
    {maxNumber, setMaxNumber, minNumber, setMinNumber, setNumber}
) => {
   const errorMaxInput = maxNumber < minNumber
   const errorMinInput = minNumber < 0 || minNumber > maxNumber;

   if (errorMaxInput) {
      setMaxNumber(5)
   }
   if (errorMinInput) {
      setMinNumber(0)
   }

   const editMaxNumber = (e: ChangeEvent<HTMLInputElement>) => {
      setMaxNumber(+e.currentTarget.value)
   }
   const editMinNumber = (e: ChangeEvent<HTMLInputElement>) => {
      setMinNumber(+e.currentTarget.value)
      setNumber(+e.currentTarget.value)
   }

   useEffect(() => {
      localStorage.setItem('counterMaxValue', JSON.stringify(maxNumber))
      localStorage.setItem('counterMinValue', JSON.stringify(minNumber))
      localStorage.setItem('counterValue', JSON.stringify(minNumber))
   }, [maxNumber, minNumber])

   return (
       <div className={s.CounterOption}>
          <Input textLabel={'Max Number'} value={maxNumber} onChange={editMaxNumber}/>
          <Input textLabel={'Min Number'} value={minNumber} onChange={editMinNumber}/>
       </div>
   )
}
