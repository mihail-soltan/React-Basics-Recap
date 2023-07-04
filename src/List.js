import { useState, useEffect } from "react"

export default function List() {
    const [list, setList] = useState([
        "item1", "item2", "item3", "item4"
    ])

    function removeItems() {
        setList([])
    }
    // dependency
    useEffect(() => {
        console.log("useeffect was triggered")
    }, [list])
    return (
        <div>
            <ul>
                {list.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
            <button onClick={removeItems}>Delete all items</button>
        </div>
    )
}