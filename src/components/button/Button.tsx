import s from './Button.module.css'
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type defaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type buttonType = defaultButtonType & {
   text: string
   onClick: () => void
   isShow?: boolean
}


export const Button: React.FC<buttonType> = ({text, isShow, ...restProps}) => {
   if (isShow) return null

   return (
       <button
           className={s.button} type='button' {...restProps}>
          {text}
       </button>
   );
}
