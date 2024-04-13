import { useState } from 'react'

export const useCount = (valueToMutiply = 10) => {
  const [count, setCount] = useState(0)

  const handleMutiply = () => {
    setCount((count) => count + valueToMutiply)
  }

  return {
    count,
    setCount,
    handleMutiply,
  }
}
