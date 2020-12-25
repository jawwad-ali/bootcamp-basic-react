import React from "react"

const Text = ({ value, className, style }) => (
    <p className={className} style={style}>
        {value} 
    </p>
)
export default Text