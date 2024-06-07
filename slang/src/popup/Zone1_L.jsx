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
        justifyContent: "space-between",
        alignItems: "center"
       }}>

<div style = {{marginLeft: "45px", height: "100px", width: "200px", border: "4px solid #ADC4CE", borderRadius: "30px", display: "flex", justifyContent: "center",
        alignItems: "center", background: "#CDE8E5", boxShadow: "0 3px 6px rgba(0,0,0,0.4)"
        }}> 
        {/* 육식 - 늑대, 곰, 범, 고릴라 */}
        <a href="/carnivoretest" style={{ textDecoration: 'none', color: 'inherit' }}>

        <h3 style={{fontSize: "35px",  cursor: 'pointer'}}> 육식 </h3> </a>
        </div>

        {/* 초식 - 기린, 낙타, 사슴, 코뿔소, 소, 토끼, 양 */}
        <div style = {{ height: "100px", width: "200px", border: "4px solid #ADC4CE", borderRadius: "30px",
          display: "flex", justifyContent: "center", alignItems: "center", background: "#CDE8E5", boxShadow: "0 3px 6px rgba(0,0,0,0.4)"
        }}> 
              <a href="/veggietest" style={{ textDecoration: 'none', color: 'inherit' }}>

        <h3 style={{fontSize: "35px",  cursor: 'pointer'}}> 초식 </h3></a>
        </div>
        
        {/* 잡식 - 하마, 고양이, 거북이, 악어, 쥐, 닭, 개, 돼지 */}
        <div style = {{marginRight: "45px", height: "100px", width: "200px", border: "4px solid #ADC4CE", borderRadius: "30px",
          display: "flex", justifyContent: "center", alignItems: "center", background: "#CDE8E5", boxShadow: "0 3px 6px rgba(0,0,0,0.4)"
        }}> 
              <a href="/omnitest" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3 style={{fontSize: "35px",  cursor: 'pointer'}}> 잡식 </h3></a>
        </div>

      </div>
      {/*footer*/}




    </div>
</div>

    );
};

{/* 
      <a href="/animals" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 style={{ cursor: 'pointer' }}>포유류</h3>
          </a>        <h3> 양서류 </h3>
      </div>
      {/*footer*/}
 