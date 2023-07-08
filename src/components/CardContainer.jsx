
import "../sass/CardContainer.scss"
import {data} from "../helper/data"
import { PlayerCard } from "./PlayerCard"
import resim from "../assets/nba-logo.png";

export const CardContainer = () => {
  return (

    <div className="container mb-4 allCards">

      <div className="form-group mt-4">
            <input type="text" className="form-control search" placeholder="Search Player" />
      </div>

      <div className="players">

      
        {data.map((player,i)=>(

            <PlayerCard key={i} {...player}/>
        ))}

      </div>

    </div>
  )
}
