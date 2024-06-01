// zone2 => 음식 


import React, {useState} from 'react';
import { AiOutlineClose} from "react-icons/ai";



export const Zone2_L = ({onClose}) => {
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
      background: "#C1A3A3",
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
       paddingBottom: "40px", fontSize: "45px", fontWeight: 600}}>음식</h3>
        
      </div>

      {/* Body */ }

      <div style =
       {{marginTop: "100px",
        display: "flex",
        gap: "80px",
        justifyContent: "space-between",
        alignItems: "center"
       }}>

        <div style = {{marginLeft: "120px", height: "100px", width: "200px", border: "4px solid #FFF0F5", borderRadius: "30px", display: "flex", justifyContent: "center",
        alignItems: "center", background: "#F6D6D6", boxShadow: "0 3px 6px rgba(0,0,0,0.4)"
        }}> 
        <h3 style={{fontSize: "35px"}}> 명사 </h3>
        </div>

        <div style = {{marginRight: "120px", height: "100px", width: "200px", border: "4px solid #FFF0F5", borderRadius: "30px",
          display: "flex", justifyContent: "center", alignItems: "center", background: "#F6D6D6", boxShadow: "0 3px 6px rgba(0,0,0,0.4)"
        }}> 
        <h3 style={{fontSize: "35px"}}> 동사 </h3>
        </div>

      </div>
      {/*footer*/}




    </div>
</div>

    );
};