import { useState } from "react"

export default function Team() {
    const [team, setTeam]= useState(11);
    const handleAdd = ()=>{
        const updateTeam = team + 1;
        setTeam(updateTeam)
    }
    const handleRemove = ()=>{
        // const updateTeam = team - 1;
        // setTeam(updateTeam)
        setTeam(team - 1)
        
    }
    
    const teamStyle = {
        border : '2px solid yellow',
        margin: '15px',
        padding:'15px',
        borderRadius : '15px'
    
    }
    return (
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}