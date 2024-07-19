import React from "react"
import useToggle from "../../hooks/useToggle"

const MenuContext = React.createContext()
export {MenuContext}

export default function Menu({children, onOpen}){
  const [open, toggleOpen] = useToggle({
    initialValue: false,
    onToggle: onOpen
  })
  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
        <box-l borderWidth="0">
            {children}
        </box-l>
    </MenuContext.Provider>
)
}