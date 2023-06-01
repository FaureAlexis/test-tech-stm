import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./router/router";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import './style/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={Router} />
    </ChakraProvider>
  </React.StrictMode>,
)
