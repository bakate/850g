import React from "react"
import { CartStateProvider } from "./src/components/context/LocalState"
import Page from "./src/components/Page"

export const wrapPageElement = ({ element, props }) => {
  return (<CartStateProvider>
    <Page {...props}>{element}</Page>
    </CartStateProvider>)
}
