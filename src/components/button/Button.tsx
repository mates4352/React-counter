import s from './Button.module.css'

type buttonType = {
   text: string
   disabled: boolean
   onClick: () => void
}

export const Button: React.FC<buttonType> = ({text,disabled,onClick}) => {

   return (
       <button
           className={s.button} type='button' disabled={disabled} onClick={onClick}>
          {text}
       </button>
   );
}
