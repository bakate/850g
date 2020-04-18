import React from "react";
import { CartStateProvider } from "./src/components/context/LocalState";
import "./static/font.css";
export const wrapPageElement = ({ element }) => {
  return (
 <CartStateProvider>
    {element}
 </CartStateProvider>

  )
  }
