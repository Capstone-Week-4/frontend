// zone 1의 팝업 => 동물 

import React, {useState} from 'react';
import { AiOutlineClose} from "react-icons/ai";

import { useNavigate } from 'react-router-dom';


export const Zone1_L = ({onClose}) => {
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   setTimeout(() => {
  //     navigate("/animals");
  //   }, 1800);
  // };
    return (

<div 
        style = {{
          position: "fixed",
          background: "rgba(0,0,0,0.6)",
          top:0,
          left:0,
          right:0,
          bottom:0,
          padding:"10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"

        }}
>
  { /* content */ }

  <div 
    style = {{
      position: "relative",
      background: "#C2DEDC",
      borderRadius: "165px",
      padding: "140px 180px",
      animation: "dropTop .4s linear",
      display: "flex",
      flexDirection: "column",
    }}
    >



      {/* Header
         <div style ={{position: "absolute", top:70, right:85 }}>
          <AiOutlineClose onClick = {onClose} size={32}/>
        </div>
 */}
      <div style = {{
        borderBottom: "2px solid gray",
        paddingBottom: "50px",
        diplay: "flex",
        paddingRight:"100px",
        paddingLeft: "100px",
        width: "100%"
      }}>
       <h2 style = {{margin: 0, marginLeft: "50px", paddingLeft: "100px", paddingRight: "100px", width: "300px", justifyContent: "center"}}>동물</h2>
        
   
          <button class="button--antiman button--round-l button--text-medium">
            <i class="button__icon icon icon-plus"></i><span>      
                  <AiOutlineClose onClick = {onClose} size={30}/>
              </span></button>
      
      </div>

      {/* Body */ }

      <div style =
       {{marginTop: "100px",
        display: "flex",
        gap: "80px",
        justifyContent: "center",
        alignItems: "center"
       }}>
 <a href="/animals" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 style={{ cursor: 'pointer' }}>포유류</h3>
          </a>        <h3> 양서류 </h3>
      </div>
      {/*footer*/}




    </div>
</div>

    );
};