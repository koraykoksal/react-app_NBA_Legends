
import { useState } from "react"

import "..//.//sass/Header.scss"
import image from "../assets/nba-logo.png"

export const Header = () => {

  return (
    <div>


        <div className="container text-center mt-4 p-2 header">
            
            <img src={image} alt="" />

            <h1>NBA Legends</h1>

            
            
            
        </div>


    </div>
  )
}
