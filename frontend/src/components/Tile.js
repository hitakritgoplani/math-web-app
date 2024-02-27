import React, {useState} from 'react'
import '../styles/Tile.css'

export default function Tile(props) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
        console.log("render")
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    return (
        <div style={{backgroundColor:isHovered ? props.hoverColor : props.color}} class="option" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onClick={() => window.location.href = `/${props.name}`}>
            <h1>{props.name}</h1>
        </div>
    )
}
// onclick="window.location.href='counting.html';
    