import React from 'react'
import './../App.css'

export default function Card(props) {
    return (
        <div className="card" >
            <div>
                <span>{props.title}</span>
            </div>
            <div>
                <p>{props.value}</p>
            </div>
        </div>
    )
}
