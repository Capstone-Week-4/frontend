// zone2 => 음식 


import React, {useState} from 'react';
import { AiOutlineClose} from "react-icons/ai";



export const Conv_Zone = ({onClose}) => {
    return (

<div 
        style = {{
          position: "fixed",
          background: "rgba(0,0,0,0.6)",
          top:0,
          left:0,
          right:0,
          bottom:0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"

        }}
>
  { /* content */ }

  <div 
    style = {{
      position: "relative",
      background: "#9290C3",
      borderRadius: "170px",
      padding: "120px 120px",
      animation: "dropTop 0.4s linear",
      display: "flex",
      flexDirection: "column",
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

        borderBottom: "2px solid #FFF0F5",

        diplay: "flex",
        width: "800px",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

      }}>

       <h3 style = {{ justifyContent: "center", alignItems: "center", 
       paddingBottom: "40px", fontSize: "45px", fontWeight: 600}}>대화</h3>

      </div>

      {/* Body */ }

      <div style =
       {{marginTop: "100px",
        display: "flex",
        gap: "80px",
        justifyContent: "center",
        alignItems: "center"
       }}>

        <div style = {{height: "110px", width: "300px", border: "4px solid #FFF0F5", borderRadius: "30px", display: "flex", justifyContent: "center",
        alignItems: "center", background: "#A7C5EB", boxShadow: "0 3px 6px rgba(0,0,0,0.4)", marginRight: "20px"

        }}> 
                              <a href="/convo" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3 style={{fontSize: "35px"}}> 대화 시작하기 </h3></a>

        </div>

      </div>
      {/*footer*/}




    </div>
</div>

    );
};