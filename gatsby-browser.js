import '@aws-amplify/ui/dist/style.css';
import Amplify from 'aws-amplify';
import React from "react";
import awsConfig from './src/aws-exports';
import { CartStateProvider } from "./src/components/context/LocalState";
Amplify.configure(awsConfig)

export const wrapRootElement = ({ element }) => {

   return (
      <CartStateProvider>
    {element}
 </CartStateProvider>

  )
  }
