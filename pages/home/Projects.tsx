import React from "react";

export default function Projects(props:any) {
    return (
        <>
            The title is: {props.title},
            The Description is: {props.description},
            The date is: {props.date},
            The Image is: {props.img},
        </>
    )
}