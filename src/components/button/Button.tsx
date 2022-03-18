import s from './Button.module.css'
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type defaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type buttonType = defaultButtonType & {
   text: string
   onClick: () => void
}


export const Button: React.FC<buttonType> = ({text, ...restProps}) => {
   return (
       <button
           className={s.button} type='button' {...restProps}>
          {text}
       </button>
   );
}
