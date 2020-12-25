import React from "react"

const Button = ({ value, style, className, onClick }) => (
    <button style={style}
        onClick={onClick}
        className={className}>
        {value}
    </button>
)
export default Button 