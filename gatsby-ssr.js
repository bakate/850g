import React from "react"
import { CartStateProvider } from "./src/components/context/LocalState"

export const wrapPageElement = ({ element }) => {
  return (<CartStateProvider>
  {element}
    </CartStateProvider>)
}
