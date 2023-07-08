import "../sass/PlayerCard.scss";
import { useState } from "react";

export const PlayerCard = ({img,name,statistics}) => {

    const [showImage, setShowImage] = useState(true)

    const handleClick=()=>{
        
        setShowImage(!showImage)
    }


  return (
    <div onClick={handleClick}>

        {
            showImage? (
                <div className="cardsTop m-auto text-center">
                    <div>
        
                        <img className="card-img" src={img} alt={name} />
        
                    </div>
                </div>
            ):(<ul className="m-auto statisticsTop">
                {statistics.map((item,i) =>{
                    return(

                        <div className="statistics">
                            <li key={i}>
                            👑{item}
                            </li>
                        </div>
                        
                    )
                })}
            </ul>)
        }
        <div className="cardDetail text-center">
            <h5>{name}</h5>
        </div>






    </div>
  )
}
