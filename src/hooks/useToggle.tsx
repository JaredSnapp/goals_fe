import { useState } from "react"

function useToggle(initialValue: boolean) : [boolean, () => void] {
  const [value, setValue] = useState(initialValue)

  function toggle(): void {
    setValue((val) => !val)
  }

  return [value, toggle]
}

export { useToggle };