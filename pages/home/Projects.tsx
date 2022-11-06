import React from "react";

export default function Projects(props:any) {
    return (
        <>
            <h1>The title is: {props.title},</h1> 
            <h1>The Description is: {props.description},</h1>
            <h1>The date is: {props.date},</h1>
            <h1>The Image is: {props.img},</h1>
        </>
    )
}