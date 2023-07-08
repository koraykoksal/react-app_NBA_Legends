
import "../sass/CardContainer.scss"
import {data} from "../helper/data"
import { PlayerCard } from "./PlayerCard"
import { useState} from "react";

export const CardContainer = () => {

  const [search, setSearch] = useState("")

  const handleCahnge=(e)=>{
    setSearch(e.target.value)
  }

  return (

    <div className="container mb-4 allCards">

      <div className="form-group mt-4">
            <input type="text" className="form-control search" placeholder="Search Player" onChange={handleCahnge} />
      </div>

      <div className="players">

      
        {data.filter((item)=>(item.name.toLowerCase().includes(search.trim().toLowerCase())))
        .map((player,i)=>(

            <PlayerCard key={i} {...player}/>
        ))}


      </div>

    </div>
  )
}
