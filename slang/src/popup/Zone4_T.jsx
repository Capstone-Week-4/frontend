// zone 4 => 스포츠 
// testing 을 위한 페이지 


import React, {useState} from 'react';
import { AiOutlineClose} from "react-icons/ai";



export const Zone4_T = ({onClose}) => {
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
      background: "#ADC2A9",
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
        borderBottom: "2px solid gray",
        diplay: "flex",
        width: "800px",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

      }}>

       <h3 style = {{ justifyContent: "center", 
        alignItems: "center", paddingBottom: "40px", 
        marginLeft: "50px", fontSize: "45px", fontWeight: 600}}>스포츠</h3>
        
      </div>

      {/* Body */ }

      <div style =
       {{marginTop: "100px",
        display: "flex",
        gap: "80px",
        justifyContent: "space-between",
        alignItems: "center"
       }}>

        <div style = {{marginLeft: "100px", height: "100px", width: "280px", border: "4px solid #99A799", borderRadius: "30px", display: "flex", justifyContent: "center",
        alignItems: "center", background: "#D3E4CD", boxShadow: "0 3px 6px rgba(0,0,0,0.4)"
        }}> 
                              <a href="/indoorsporttest" style={{ textDecoration: 'none', color: 'inherit' }}>

        <h3 style={{fontSize: "35px",  cursor: 'pointer'}}> 실내 스포츠 </h3></a>
        </div>

        <div style = {{marginRight: "120px", height: "100px", width: "280px", border: "4px solid #99A799", borderRadius: "30px",
          display: "flex", justifyContent: "center", alignItems: "center", background: "#D3E4CD", boxShadow: "0 3px 6px rgba(0,0,0,0.4)"
        }}> 
                              <a href="/outdoorsporttest" style={{ textDecoration: 'none', color: 'inherit' }}>

        <h3 style={{fontSize: "35px",  cursor: 'pointer'}}> 실외 스포츠 </h3> </a>
        </div>

      </div>
      {/*footer*/}




    </div>
</div>

    );
};