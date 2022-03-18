import s from './CounterOption.module.css';
import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {Input} from "../input/Input";

type CounterOptionType = {
   maxNumber: number
   minNumber: number
   setNumber: Dispatch<SetStateAction<number>>
   setMaxNumber: Dispatch<SetStateAction<number>>
   setMinNumber: Dispatch<SetStateAction<number>>
}

export const CounterOption: React.FC<CounterOptionType> = ({maxNumber, setMaxNumber, minNumber, setMinNumber, setNumber}) => {
   const editMaxNumber = (e: ChangeEvent<HTMLInputElement>) => {
      setMaxNumber(+e.currentTarget.value)
   }
   const editMinNumber = (e: ChangeEvent<HTMLInputElement>) => {
      setMinNumber(+e.currentTarget.value)
      setNumber(+e.currentTarget.value)
   }
   const error = () => minNumber < 0 || maxNumber <= minNumber

   return (
       <div className={s.CounterOption}>
          <Input textLabel={'Max Number'} value={maxNumber} onChange={editMaxNumber} error={error()}/>
          <Input textLabel={'Min Number'} value={minNumber} onChange={editMinNumber} error={error()}/>
       </div>
   )
}
