import { create } from 'zustand'
export const useStore = create((set) => ({
    inputValue: '',
    setInputValue: (newValue) => set(() =>({ inputValue:newValue })),
}))
