import React from 'react'

export default function List(){
    let colors=['red', 'green', 'blue', 'yellow']
    let list =colors.map(c => <li>{c}</li>)
    return (<ul>{list}</ul>)
    //return <ul><li>{colors[0]}</li></ul>


    /*
        <ul>
        {colors.map(c => <li>{c}</li>)}
        </ul>
    */
}