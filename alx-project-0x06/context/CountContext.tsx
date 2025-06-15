import { createContext, useContext, useState, ReactNode } from "react"

interface CountContextProps {
  count: number
  increment: () => void
  decrement: () => void
}

export const CountContext = createContext<CountContextProps | undefined>(undefined)

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0)

  const increment: () => void = () => setCount((count) => count + 1)
  const decrement: () => void = () => setCount((count) => (count > 0 ? count - 1 : 0))

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  )
}

export const useCount = (): CountContextProps => {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error("useCount must be used within a CountProvider")
  }

  return context
}
