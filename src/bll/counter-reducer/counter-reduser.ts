export type counterType = {
   maxNumber: number
   minNumber: number
   number: number
   isShow: boolean
}
type addNumberType = ReturnType<typeof addNumberAT>
type addMaxNumberType = ReturnType<typeof addMaxNumberAT>
type addMinNumberType = ReturnType<typeof addMinNumberAT>
type showrOptionCounterType = ReturnType<typeof showrOptionCounterAT>
type actionType =
      addNumberType
    | addMaxNumberType
    | addMinNumberType
    | showrOptionCounterType

const inisialState: counterType = {
   maxNumber: 5,
   minNumber: 0,
   number: 2,
   isShow: true
}

export const CounterReduсer = (state: counterType = inisialState, action: actionType): counterType => {
   switch (action.type) {
      case 'ADD-NUMBER':
         return {...state, number: action.number}
      case 'ADD-MAX-NUMBER':
         return {...state, maxNumber: action.maxNumber}
      case 'ADD-MIN-NUMBER':
         return {...state, minNumber: action.minNumber}
      case 'SHOW-OPTION-COUNTER':
         return {...state, isShow: action.isShow}
      default: return state
   }
}

export const addNumberAT = (number: number) => {
   return {type: 'ADD-NUMBER', number} as const
}

export const addMaxNumberAT = (maxNumber: number) => {
   return {type: 'ADD-MAX-NUMBER', maxNumber} as const
}

export const addMinNumberAT = (minNumber: number) => {
   return {type: 'ADD-MIN-NUMBER', minNumber} as const
}

export const showrOptionCounterAT = (isShow: boolean) => {
   return {type: 'SHOW-OPTION-COUNTER', isShow} as const
}
