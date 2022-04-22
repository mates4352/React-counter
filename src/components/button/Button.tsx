import s from './Button.module.css'
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type defaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type buttonType = defaultButtonType & {
}

export const Button: React.FC<buttonType> = ({...restProps}) => {
   return (
       <button className={s.button} type='button' {...restProps}/>
   );
}
