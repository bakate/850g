import React from "react"
import { CartStateProvider } from "./src/components/context/LocalState"
export const wrapRootElement = ({ element }) => {
  return (<CartStateProvider>
  {element}
    </CartStateProvider>)
}
