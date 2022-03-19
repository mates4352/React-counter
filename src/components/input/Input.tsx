import * as React from 'react';
import s from './input.module.css';
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

type defaultInputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type inputType = defaultInputType & {
   textLabel: string;
}

export const Input:React.FC<inputType> = ({textLabel, ...restProps}) => {
   return (
       <div className={s.input_content}>
          <label className={s.input_wrap}>
             <span className={s.label}>{textLabel}</span>

             <input className={s.input} type="number" {...restProps}/>
          </label>
       </div>
   )
}
