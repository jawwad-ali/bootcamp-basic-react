import React, { useState } from "react"
import Button from "./Button"
import Text from "./Text"
import Prac from "./Prac"

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <Text value={"Counter Application"} style={{ fontSize: "32px", fontWeight: "bold" }} />

            <Text value={`Value: ${count}`} />
            <Button value={"Increment"} onClick={() => setCount(count + 1)} />
            <Button value={"Decrement"} onClick={() => setCount(count - 1)} />
            <Prac value={"FOOTER"} className={"footer"} />
        </div>
    )
}
export default Counter 