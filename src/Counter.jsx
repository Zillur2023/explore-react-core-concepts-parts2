import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const newCount1 = count + 1
    const newCount2 = count - 1
    const handleAdd = () => setCount(newCount1)
    const handleReduce = () => setCount(newCount2)
    return (
        <div style={{border:'2px solid tomato'}}>
        <h3>Counter : {count} </h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
