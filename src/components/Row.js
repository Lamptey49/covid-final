import React from 'react'
import './../App.css'
export default function Row(props) {
   return (
        

            <div  className={"row row-hover"}  style={{backgroundColor: props.backgroundColor, marginBottom:'5px' ,border:props.border, display:'flex', flexDirection:'row', alignItems:'center', height:'53px', justifyContent:"space-around", cursor:'pointer', color:'#000', fontSize:'20px', fontWeight:'bold'}}>
                <span>
                    <h3>{props.country}</h3>
                </span>
                <span>
                    <h3>{props.active}</h3>
                </span>
                <span>
                    <h3>{props.Recoveries}</h3>
                </span>
                <span>
                    <h3>{props.deaths}</h3>
                </span>
                <span>
                    <h3>{props.totalCases}</h3>
                </span>
                
            </div>
        
        
    )
}
