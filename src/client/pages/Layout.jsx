import React from "react"
import {Outlet} from "react-router-dom"
import Header from "../components/Header"
import '../assets/StylesMain'
import Footer from "../components/Footer"

export default function Layout(){
  return(
    <box-l padding="0" borderWidth="0" >
            <Header/>
      <main >
    <Outlet/>
    </main>
    <Footer/>
    </box-l>




  )
}