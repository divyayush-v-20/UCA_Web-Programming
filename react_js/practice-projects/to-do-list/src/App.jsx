// import { useState } from "react";
import { routes } from "./Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import './components/form.css'

export default function App(){
  const router = createBrowserRouter(routes);
  return(
    <>
      <RouterProvider router = {router}/>
    </>
  );
}