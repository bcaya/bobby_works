import React from "react";

export default function MenuItem({children}){
  return(
    <box-l borderWidth="0" padding="0" className="menu-item">
      {children}
    </box-l>
  )
}