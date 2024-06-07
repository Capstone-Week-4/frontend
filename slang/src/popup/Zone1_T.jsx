// zone 1의 팝업 => 동물 

import React, {useState} from 'react';
import { AiOutlineClose} from "react-icons/ai";

import { useNavigate } from 'react-router-dom';


export const Zone1_T = ({onClose}) => {
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   setTimeout(() => {
  //     navigate("/animals");
  //   }, 1800);
  // };

  // testing 을 위한 페이지 learning 과 탭 디자인은 똑같긴 함 

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
      background: "#7AB2B2",
      borderRadius: "170px",
      padding: "120px 120px",
      animation: "dropTop 0.4s linear",
      display: "flex",
      flexDirection: "column",
      marginBottom: "400px"
    }}
    >



      {/* Header
         <div style ={{position: "absolute", top:70, right:85 }}>
          <AiOutlineClose onClick = {onClose} size={32}/>
        </div>
 */}

 
<div style = {{position: "absolute", top: 60, right: 110}}> 
        <AiOutlineClose onClick = {onClose} size={30} />
      </div>

      <div style = {{
        borderBottom: "2px solid #fff",
        diplay: "flex",
        width: "1000px",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

      }}>

      <h3 style = {{ justifyContent: "center", alignItems: "center", paddingBottom: "40px", fontSize: "45px", fontWeight: 600}}>동물</h3>
        
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

        <h3 style={{fontSize: "35px"}}> 육식 </h3> </a>
        </div>

        {/* 초식 - 기린, 낙타, 사슴, 코뿔소, 소, 토끼, 양 */}
        <div style = {{ height: "100px", width: "200px", border: "4px solid #ADC4CE", borderRadius: "30px",
          display: "flex", justifyContent: "center", alignItems: "center", background: "#CDE8E5", boxShadow: "0 3px 6px rgba(0,0,0,0.4)"
        }}> 
                      <a href="/veggietest" style={{ textDecoration: 'none', color: 'inherit' }}>

        <h3 style={{fontSize: "35px"}}> 초식 </h3></a>
        </div>
        
        {/* 잡식 - 하마, 고양이, 거북이, 악어, 쥐, 닭, 개, 돼지 */}
        <div style = {{marginRight: "45px", height: "100px", width: "200px", border: "4px solid #ADC4CE", borderRadius: "30px",
          display: "flex", justifyContent: "center", alignItems: "center", background: "#CDE8E5", boxShadow: "0 3px 6px rgba(0,0,0,0.4)"
        }}> 
                      <a href="/omnitest" style={{ textDecoration: 'none', color: 'inherit' }}>

        <h3 style={{fontSize: "35px"}}> 잡식 </h3></a>
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
 