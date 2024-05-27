// zone 1의 팝업 => 동물 

import React, {useState} from 'react';
import { AiOutlineClose} from "react-icons/ai";
import "../App.css";

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
      padding: "120px 170px",
      animation: "dropTop 0.8s linear",
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
        height: "580px",
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

          <div style={{ marginTop: "-50px", marginLeft: "165px" }}>


                    < div style={{display: "flex"}}>
                    {/* 동적으로 user nick name 띄우기 */}
                    <h3 style={{fontFamily:'neurimboGothicRegular', fontSize: "33px"}}>닉네임-정지연</h3> 
                    <div style={{display:"flex", marginLeft: "880px ",  marginTop: "10px", justifyContent: "center", alignContent: "center", padding:"10px", width: "215px", height: "65px", border: "3px solid #EEF7FF", borderRadius: "100px", background: "#757575",  boxShadow: "0 3px 6px rgba(0,0,0,0.4)"}}>
                    <p style={{marginLeft: "10px", color:"#fff",fontFamily:"neurimboGothicRegular" ,  fontSize: "20px"}}> Edit Profile</p>
                    </div>
                    </div>

                  <div style={{display:"flex", alignItems: "center", marginTop: "-20px"}}>
                  <p style = {{ color: "#000", fontFamily:'establishRetrosansOTF'}}>@</p> 
                    
                  {/* 동적으로 user id 띄우기 */}
                  <p style = {{marginLeft:"2px", color: "#000", fontFamily:'establishRetrosansOTF' }}>userid</p> 
                  </div>

                  <div style={{display:"flex"}}>
                    <p style ={{color: "#000"}}>Joined </p>
                    <p style = {{color:"#000", marginLeft: "7px", fontWeight:600}}> June 2023</p>
                    </div>

                  <div style={{display: "flex", alignItems: "center"}}>

                  <div style = {{display:"flex",  marginLeft:"-20px", marginTop: "10px", justifyContent: "center" , alignContent: "center", padding:"10px", width: "215px", height: "65px", border: "3px solid #EEF7FF", borderRadius: "100px", background: "#F1E5D1",  boxShadow: "0 3px 6px rgba(0,0,0,0.4)"}}>

                    {/*  동적으로 팔로잉 할당 */}
                    <p style={{color:"#000", fontWeight: 600, fontFamily:"neurimboGothicRegular", fontSize: "20px"}}> 13 </p>
                    <p style={{marginLeft:"10px", color:"#000", fontFamily:"neurimboGothicRegular",  fontSize: "20px"}}> Following </p>
                  </div>

                  <div style={{display:"flex", marginLeft: "30px ",  marginTop: "10px", justifyContent: "center", alignContent: "center", padding:"10px", width: "215px", height: "65px", border: "3px solid #EEF7FF", borderRadius: "100px", background: "#F1E5D1",  boxShadow: "0 3px 6px rgba(0,0,0,0.4)"}}>
                    {/*  동적으로 팔로워 할당  */}
                    <p style={{color: "#000", fontWeight: 600, fontFamily:"neurimboGothicRegular",  fontSize: "20px"}} >4 </p>
                    <p style={{marginLeft: "10px", color:"#000",fontFamily:"neurimboGothicRegular" ,  fontSize: "20px"}}> Followers</p>
                  </div>
                  </div>
                
                </div>
      </div>

    <div style={{display:"flex",width: "100%", marginTop: "20px"}}>

      <div style={{ flex: 1, // 부모 요소의 너비를 1/3으로 사용
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center", display:"flex", marginLeft: "30px ",  marginTop: "20px", justifyContent: "center", alignContent: "center", padding:"10px", width: "90%", height: "65px", border: "3px solid #EEF7FF", borderRadius: "100px", background: "#F1E5D1",  boxShadow: "0 3px 6px rgba(0,0,0,0.4)"}}>
        <h3 style={{color:"#000", fontFamily: "establishRetrosansOTF", fontSize: "23px", marginTop: "7px"}}> 맞은 문제 </h3>
      </div>
      
      <div style={{ flex: 1, // 부모 요소의 너비를 1/3으로 사용
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center", 
                        display:"flex", marginLeft: "30px ",  marginTop: "20px", justifyContent: "center", alignContent: "center", padding:"10px", width: "90%", height: "65px", border: "3px solid #EEF7FF", borderRadius: "100px", background: "#F1E5D1",  boxShadow: "0 3px 6px rgba(0,0,0,0.4)"}}>
        <h3 style={{color:"#000", fontFamily: "establishRetrosansOTF", fontSize: "23px", marginTop: "7px"}}> 틀린 문제 </h3>
      </div>
      
      <div style={{ flex: 1, // 부모 요소의 너비를 1/3으로 사용
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center", 
                        display:"flex", marginLeft: "30px ",  marginTop: "20px", justifyContent: "center", alignContent: "center", padding:"10px", width: "90%", height: "65px", border: "3px solid #EEF7FF", borderRadius: "100px", background: "#F1E5D1",  boxShadow: "0 3px 6px rgba(0,0,0,0.4)"}}>
        <h3 style={{color:"#000", fontFamily: "establishRetrosansOTF", fontSize: "23px",  marginTop: "7px"}}> 사용자 랭킹 </h3>
      </div>
    </div>


    <div style={{display: "flex", marginTop: "10px", width: "100%"}}>
    <div 
            style={{
              flex: 1,
              display: "flex",
              marginLeft: "30px",
              padding: "20px",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: "200px",
              border: "3px solid #EEF7FF",
              borderRadius: "50px",
              background: "#E9EDC9",
              boxShadow: "0 3px 6px rgba(0,0,0,0.6)",
              overflowY: "auto"
            }}
          >
                            {/* 동적으로 맞은 문제 할당 */}
              <h5 style={{ color: "#217346", fontWeight: 700}}> 동물-토끼 </h5>
            
              </div>
              
              <div 
            style={{
              flex: 1,
              display: "flex",
              marginLeft: "30px",
              padding: "20px",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: "200px",
              border: "3px solid #EEF7FF",
              borderRadius: "50px",
              background: "#E9EDC9",
              boxShadow: "0 3px 6px rgba(0,0,0,0.6)",
              overflowY: "auto"
            }}
          >                 {/* 동적으로 틀린 문제 할당 */}

            <h5 style={{ color: "#CD201F", fontWeight: 700}}> 스포츠-야구 </h5>
            
              </div>
              <div 
            style={{
              flex: 1,
              display: "flex",
              marginLeft: "30px",
              padding: "20px",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: "200px",
              border: "3px solid #EEF7FF",
              borderRadius: "50px",
              background: "#E9EDC9",
              boxShadow: "0 3px 6px rgba(0,0,0,0.6)",
              overflowY: "auto"
            }}
          >                {/* 동적으로 사용자별 랭킹 조정 */}
          <h5 style={{ color: "#000", fontWeight: 700}}> 13 </h5>
          </div>
    </div>

      

      </div>
    </div>

    );
};