import React from "react";

const Team = (props) => {
    return (
     <div className="team-card">
         <img src={props.logo} alt={props.name} /> 
            <h5>{props.name}</h5>
            <button onClick={() => window.open(props.url, "_blank")}>
                {props.players}
            </button>
     </div>
    )
}

export default Team;
