import React from "react"
import Text from "../Components/Text"

export default {
    title: "Text",
    component: Text
}

export const TextLg = () => ( 
    <Text
        value={"Text Large"}
        style={{ fontSize: "32px" }}
    />
)

export const TextMd = () => (
    <Text
        value={"Text Meduim"}
        style={{ fontSize: "24px" }}
    />
)

export const TextSm = () => (
    <Text
        value={"Text Small"}
        style={{ fontSize: "16px" }}
    />
)