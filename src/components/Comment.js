import React,{useEffect, useState} from "react";


function Comment(props){
  return (
    <div>
      <p>
        {props.author} {props.text} {props.date}
      </p>
    </div>    
  ); 
}


export default Comment;