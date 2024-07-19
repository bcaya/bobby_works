import React from "react"
import {Outlet} from "react-router-dom"
import Header from "../components/Header"
import '../../../public/StylesMain'
import Footer from "../components/Footer"
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

export default function Layout(){
  return(
    <box-l padding="0" borderWidth="0" >
      <ScrollToHashElement />
            <Header/>
      <main >
    <Outlet/>
    </main>
    <Footer/>
    </box-l>




  )
}