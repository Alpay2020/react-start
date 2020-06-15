import React from "react";
import ListItem from "./ListItem";


export default function List(props) {
    return (<ul>
        {props.items.map((item) => (<ListItem itemName={item} />))}
    </ul>);

}