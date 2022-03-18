import * as React from 'react';
import s from './input.module.css';
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

type defaultInputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type inputType = defaultInputType & {
   textLabel: string;
   error: boolean;
}

export const Input:React.FC<inputType> = ({textLabel, error, ...restProps}) => {
   const classNameInputError = error ? s.input_error : '';

   return (
       <div className={s.input_content}>
          <label className={s.input_wrap}>
             <span className={s.label}>{textLabel}</span>

             <input className={`${s.input} ${classNameInputError}`} type="number" {...restProps}/>
          </label>
       </div>
   )
}
