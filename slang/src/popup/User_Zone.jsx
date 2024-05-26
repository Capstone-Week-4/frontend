// zone 1의 팝업 => 동물 

import React, {useState} from 'react';
import { AiOutlineClose} from "react-icons/ai";



export const User_Zone = ({onClose}) => {
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
      background: "#E0FBE2", // 팝업창 자체의 색상 
      borderRadius: "165px",
      padding: "200px 180px",
      animation: "dropTop 0.4s linear",
      display: "flex",
      flexDirection: "column"
    }}
    >
      {/* Header
         <div style ={{position: "absolute", top:70, right:85 }}>
          <AiOutlineClose onClick = {onClose} size={32}/>
        </div>
 */}

        <div style ={{position: "absolute", top:70, right:85 }}>
          <AiOutlineClose onClick = {onClose} size={32}/>
        </div>  
      

      <div style = {{ 
        width: "1500px",
        height: "600px",
        border: "4px solid #CDE8E5",
        borderRadius: "50px",
        background: "#E9EDC9", // 프로필 카드 색상 
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.5)"

      }}>


        <div style={{
          width: "1500px",
          height: "300px",
          border: "2px solid #ccc",
          borderRadius: "30px",
          overflow: "hidden",
          marginTop: "-5px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)"

        }}>

          <img
            src={`${process.env.PUBLIC_URL}/users/user_bg_1.jpg`} // 우선 public 에 있는 img 로 대체함 
            alt = "Background"
            style = {{
              width: "100%",
              height: "100%",
              objectFit: "cover"
    
            }} />
            </div> 

          <div style={{
            marginTop: "-50px",
            marginLeft: "30px",
            borderRadius: "50%",
            width: "115px",
            height: "115px",
            overflow: "hidden",
            border: "5px solid white",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2"
          }} >
            <img 
              src = {`${process.env.PUBLIC_URL}/users/user_profile_img.jpg`}
              alt = "User profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
              />

          </div>

          <div style={{ marginTop: "-45px", marginLeft: "165px" }}>
                    <h2>닉네임 - 정지연</h2> 
                    <h3>@username</h3>
                    <p style ={{color: "#000", marginTop: "5px"}}>Joined June 2023</p>
                    <p style = {{color: "#000", }}> 13 Following 4 Followers</p>
                </div>


      </div>
      </div>
    </div>

    );
};