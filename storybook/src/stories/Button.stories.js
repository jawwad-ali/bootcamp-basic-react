import React from "react"
import Button from "../Components/Button"

export default {
    title: "Button",
    component: Button
}

export const BtnLg = () => (
    <Button
        value={"Large Button"}
        className={"btn"}
        onClick={() => alert("StoryBook")}
        style={{
            padding: "10px 100px", backgroundColor: "black", color: "white", border: "none",
            cursor:"pointer"  
        }}
    />
)

export const BtnMd = () => (
    <Button
        className={"btn"}
        value={"Button Small"}
        onClick={() => alert("Medium button")}
        style={{ padding: "10px 50px", backgroundColor: "pink", color: "white" }}

    />
)

export const BtnSm = () => (
    <Button
        className={"btn"}
        value={"Button Small"}
        onClick={() => alert("Small button")}
        style={{ backgroundColor: "pink", color: "white" }}

    />
)