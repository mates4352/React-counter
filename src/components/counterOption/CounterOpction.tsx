import s from './CounterOption.module.css';
import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {Input} from "../input/Input";

type CounterOptionType = {
   maxNumber: number,
   minNumber: number,
   setMaxNumber: Dispatch<SetStateAction<number>>
   setMinNumber: Dispatch<SetStateAction<number>>
}

export const CounterOption: React.FC<CounterOptionType> = ({maxNumber, setMaxNumber, minNumber, setMinNumber}) => {
   const editMaxNumber = (e: ChangeEvent<HTMLInputElement>) => {
      setMaxNumber(+e.currentTarget.value)
   }
   const editMinNumber = (e: ChangeEvent<HTMLInputElement>) => {
      setMinNumber(+e.currentTarget.value)
   }
   const error = () => minNumber < 0 || maxNumber <= minNumber

   return (
       <div className={s.CounterOption}>
          <Input textLabel={'Max Number'} onChange={editMaxNumber} error={error()}/>
          <Input textLabel={'Min Number'} onChange={editMinNumber} error={error()}/>
       </div>
   )
}
