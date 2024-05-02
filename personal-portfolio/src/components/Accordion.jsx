import React, { createContext, useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AccordianContext = createContext()

export default function Accordion({ children, value, onChange, ...props}) {
    const [ selected, setSelected ] = useState(value)

    useEffect(() => {
        onChange?.(selected)
    }, [selected])
  
    return (
    <ul {...props}>
        <AccordianContext.Provider value={{ selected, setSelected }}>
            {children}
        </AccordianContext.Provider>
    </ul>
  )
}

export function AccordionItem({children, value, trigger, ...props}) {
    const {selected, setSelected} = useContext(AccordionContext)
    const open = selected === value
    return (
        <li className="border-b" {...props}>
            <header role="button" onClick={() => setSelected(open ? null : value)}
            className="flex justify-between items-center p-4 font-medium">
                {trigger}
                <ChevronDown size={16} />
            </header>
            <div className="overflow-y hidden" style={{height: open ? "100%" : 0}}>
                <div className="p-2 pb-4">{children}</div>
            </div>
        </li>
    )
}