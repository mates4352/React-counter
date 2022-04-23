import {
   addMaxNumberAT,
   addMinNumberAT,
   addNumberAT,
   CounterReduсer,
   counterType,
   showrOptionCounterAT
} from "./counter-reduser";

test('test action ADD-NUMBER', () => {
   const state: counterType = {
      maxNumber: 5,
      minNumber: 0,
      number: 0,
      isShow: false
   }

   const newState = CounterReduсer(state, addNumberAT(6))

   expect(state).toEqual({
          maxNumber: 5,
          minNumber: 0,
          number: 0,
          isShow: false
       })
   expect(newState.maxNumber).toBe(5)
   expect(newState.minNumber).toBe(0)
   expect(newState.number).toBe(6)
   expect(newState.isShow).toBe(false)
})

test('test action ADD-MAX-NUMBER', () => {
   const state: counterType = {
      maxNumber: 5,
      minNumber: 0,
      number: 0,
      isShow: false
   }

   const newState = CounterReduсer(state, addMaxNumberAT(10))

   expect(state).toEqual({
      maxNumber: 5,
      minNumber: 0,
      number: 0,
      isShow: false
   })
   expect(newState.maxNumber).toBe(10)
   expect(newState.minNumber).toBe(0)
   expect(newState.number).toBe(0)
   expect(newState.isShow).toBe(false)
})

test('test action ADD-MIN-NUMBER', () => {
   const state: counterType = {
      maxNumber: 5,
      minNumber: 0,
      number: 0,
      isShow: false
   }

   const newState = CounterReduсer(state, addMinNumberAT(5))

   expect(state).toEqual({
      maxNumber: 5,
      minNumber: 0,
      number: 0,
      isShow: false
   })
   expect(newState.maxNumber).toBe(5)
   expect(newState.minNumber).toBe(5)
   expect(newState.number).toBe(0)
   expect(newState.isShow).toBe(false)
})

test('test action SHOW-OPTION-COUNTER', () => {
   const state: counterType = {
      maxNumber: 5,
      minNumber: 0,
      number: 0,
      isShow: false
   }

   const newState = CounterReduсer(state, showrOptionCounterAT(true))

   expect(state).toEqual({
      maxNumber: 5,
      minNumber: 0,
      number: 0,
      isShow: false
   })
   expect(newState.maxNumber).toBe(5)
   expect(newState.minNumber).toBe(0)
   expect(newState.number).toBe(0)
   expect(newState.isShow).toBe(true)
})
