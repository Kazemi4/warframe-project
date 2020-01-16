// Librairies
import React, { useState, useEffect } from 'react'

// Screens & components
import WarframeCard from '../components/WarframeCard'

// Styles
import './WarframePage.css'

const WarframeList = () => {
    const [listFrame, setlistFrame] = useState([])
    const [myText, setmyText] = useState("")
    const [filter, setFilter] = useState(null)
    const [isReady, setIsReady] = useState(false)

    // Get all the warframes
    useEffect(() => {
        const fetchData = async () => {
            const waframeN = await require('warframe-items/data/json/Warframes.json')
            setlistFrame(waframeN)
        }
        fetchData("warframe-items/data/json/Warframes.json")
        setIsReady(true)
    }, [])

    // Controlled input
    const handleChange = event => {
        setmyText(event.target.value)
        setFilter(listFrame.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    return (
        <div className="Warframe-Page">
            <div>
                <input type="text" value={myText} onChange={handleChange} />
            </div>
            <div>
                {isReady ? filter === null ? listFrame.map(item => <WarframeCard warframe={item} />) : filter.map(item => <WarframeCard warframe={item} />) : "Loading.."}
            </div>
        </div>
    )
}







export default WarframeList
