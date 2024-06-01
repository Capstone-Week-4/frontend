// zone 1의 팝업 => 동물 

import React, {useState, useRef} from 'react';
import { AiOutlineClose} from "react-icons/ai";
import { BsPatchPlusFill } from "react-icons/bs";
import { BsPatchPlus } from "react-icons/bs";
import { BiMessageSquareCheck } from "react-icons/bi";
import { BiMessageSquareX } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";
import { AiTwotonePlusSquare } from "react-icons/ai";
import { SlArrowRightCircle } from "react-icons/sl";
import axios from 'axios'; // axios 임포트
import { SlMagnifierAdd } from "react-icons/sl";
import { SlActionRedo } from "react-icons/sl";


import "../App.css";


const FriendPopup = ({onClose}) => {
  return (
    <div
      style ={{position: "fixed", top: 0 , left: 0, right: 0, bottom: 0,
      padding: "30px", display: "flex", alignItems: "center", justifyContent: "center", width: "900px",
       zIndex: 800}}>

        <div style = {{
          position: "relative", background: "#DBB5B5", padding: "40px 50px",  marginBottom: "5px", 
          animation: "dropTop 0.4s linear",
          width: "700px", height: "980px", overflowT: "scroll", borderRadius: "50px"}}>

          <div style= {{position: "absolute", top: 35, right: 35}}>
            <AiOutlineClose onClick={onClose} size ={25}/>
            {/* 팝업 내용 */}
            </div>
            <h3 style={{textAlign: "center", fontSize:"45px", fontFamily: "neurimboGothicRegular",
              marginTop: "10px", marginBottom: "100px", padding: "30px"
            }}>나의 친구 목록</h3>
       
         <div style={{alignItems: "center", alignContent: "center"}}>

              <div style = {{borderRadius: "30px", background: "#AC7D88",
               padding: "10px", width: "550px", height: "100px", marginTop: "20px",
                border: "3px solid #EEF7FF", display: "flex", justifyContent: "center", alignItems: "center"}}>

                <h5 style ={{color:"#EDE4E0", fontSize: "23px"}}> 전윤혁 </h5>
              </div>

              <div style = {{borderRadius: "30px", background: "#AC7D88", 
              padding: "10px", width: "550px", height: "100px", marginTop: "20px", 
              border: "3px solid #EEF7FF", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h5 style={{color: "#EDE4E0",  fontSize: "23px"}}> 박진석 </h5>
              </div>

              <div style = {{borderRadius: "30px", background: "#AC7D88", padding: "10px",
               width: "550px", height: "100px", marginTop: "20px", border: "3px solid #EEF7FF", 
               display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h5 style={{color: "#EDE4E0",  fontSize: "23px"}}> 천예원 </h5>
              </div>

              </div>
        

          
        </div>
      </div>
  );
};


const RequestPopup = ({onClose}) => {

  const [isFollowPopupOpen, setIsFollowPopupOpen] = useState(false);


  const handleFollowClick=() => {
    setIsFollowPopupOpen(true);
  }
  const handleFollowPopupClose=()=> {
    setIsFollowPopupOpen(false);
  }

  return (
    <div
      style ={{position: "fixed", top: 0 , left: 0, right: 0, bottom: 0,
      padding: "30px", display: "flex", alignItems: "center", justifyContent: "center", width: "900px",
       zIndex: 800}}>

        {isFollowPopupOpen && <FollowPopup onClose={handleFollowPopupClose}/>}
        
        <div style = {{
          position: "relative", background: "#DBB5B5", padding: "40px 50px",  marginBottom: "5px", 
          animation: "dropTop 0.2s linear",
          width: "700px", height: "980px", overflowT: "scroll", borderRadius: "50px"}}>

          <div style= {{position: "absolute", top: 35, right: 35}}>
            <AiOutlineClose onClick={onClose} size ={25}/>
            {/* 팝업 내용 */}
            </div>
            <h3 style={{textAlign: "center", fontSize:"45px", fontFamily: "neurimboGothicRegular",
              marginTop: "10px", marginBottom: "100px", padding: "30px"
            }}>친구 요청</h3>
       

         <div style={{alignItems: "center", alignContent: "center"}}>

          

         <div style = {{borderRadius: "30px", background: "#AD9D9D",
               padding: "5px", width: "600px", height: "100px", marginTop: "20px", marginBottom: "25px",
                border: "5px solid #EEF7FF", display: "flex", justifyContent: "space-between",
                 alignItems: "center"}}  onClick={handleFollowClick}>

                <h5 style ={{color:"#EDE4E0", fontSize: "23px", marginLeft: "90px"}}> 내가 팔로우 할 친구 찾아보기 </h5>
                <BiUserPlus   style={{marginBottom: "5px", marginRight: "35px"}} size={30} />
              </div>

                <hr style={{ width: "100%", border: "2px solid #444444", marginBottom: "25px" }} />


          {/* 동적으로 친구 요청 된 사용자 추가하기  */}

              <div style = {{borderRadius: "30px", background: "#AC7D88",
               padding: "10px", width: "600px", height: "100px", marginTop: "20px",
                border: "3px solid #EEF7FF", display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                <h5 style ={{marginLeft: "90px", color:"#EDE4E0", fontSize: "23px"}}> 킹고 </h5>
                <div style = {{marginRight: "20px"}}>
                <BiMessageSquareCheck style={{marginBottom: "8px"}} size={28}/>
                <BiMessageSquareX style={{marginLeft: "5px", marginBottom: "8px"}}size={28} />
                </div>
              </div>

                          
          {/* 동적으로 친구 요청 된 사용자 추가하기  */}

          <div style = {{borderRadius: "30px", background: "#AC7D88",
               padding: "10px", width: "600px", height: "100px", marginTop: "20px",
                border: "3px solid #EEF7FF", display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                <h5 style ={{marginLeft: "90px", color:"#EDE4E0", fontSize: "23px"}}> SKKU </h5>

                <div style={{marginRight:"20px"}}>
                <BiMessageSquareCheck style={{marginBottom: "8px"}} size={28}/>
                <BiMessageSquareX style={{marginLeft: "5px", marginBottom: "8px"}}size={28} />
                </div>

              </div>

              </div>
        </div>
      </div>
  );
};


const EditPopup = ({onClose}) => {

return (

  <div
  style ={{position: "fixed", top: 0 , left: 0, right: 0, bottom: 0,
  padding: "30px", display: "flex", alignItems: "center", justifyContent: "center", width: "900px",
   zIndex: 800}}>

    <div style = {{
      position: "relative", background: "#A9B388", padding: "40px 50px",  marginBottom: "5px", 
      animation: "dropTop 0.4s linear",
      width: "700px", height: "980px", overflowT: "scroll", borderRadius: "50px"}}>

      <div style= {{position: "absolute", top: 35, right: 35}}>
        <AiOutlineClose onClick={onClose} size ={25}/>
        {/* 팝업 내용 */}
        </div>
        <h3 style={{textAlign: "center", fontSize:"45px", fontFamily: "neurimboGothicRegular",
          marginTop: "10px", marginBottom: "100px", padding: "30px"
        }}>프로필 수정</h3>
   
     <div style={{alignItems: "center", alignContent: "center"}}>
          </div>
      
    </div>
  </div>

);
};

const FollowPopup= ({onClose})=> {

  const inputRef = useRef();

  const onSearch = () => {
    const  searchUser = inputRef.current.value;
     // ref를 이용해 검색어를 가져온다
    if(searchUser){
        axios.get(`http://localhost:3000/main?query=${searchUser}`)
            .then((response) => {
                // 검색 결과에 따라 페이지를 전환합니다.
                if (response.data.length > 0) {
                    // 검색 결과가 있으면 검색 결과 페이지로 이동합니다.
                    //window.location.href = `/search?query=${searchUser}`;
                    alert(`${searchUser}가 검색되었습니다.`);
                } else {
                    // 검색 결과가 없으면 검색 결과가 없는 페이지로 이동합니다.
                    //window.location.href = '/no-result';
                    alert('검색결과가 없습니다');
                }
            })
            .catch((e) => {
                // 오류가 발생한 경우에는 오류 페이지로 이동합니다.
               alert('페이지 오류');
            });
    }
    inputRef.current.value = ''; 
  //검색 완료 후엔 다시 value값을 공백으로 설정. 
  };
  
  
return (

  <div
  style ={{position: "fixed", top: 0 , left: 0, right: 0, bottom: 0,
  padding: "30px", display: "flex", alignItems: "center", justifyContent: "right",
   zIndex: 800}}>

    <div style = {{
      position: "relative", background: "#96B6C5", padding: "40px 50px",  marginBottom: "5px", marginRight: "120px",
      animation: "dropTop 0.5s linear",
      width: "800px", height: "980px", overflowT: "scroll", borderRadius: "50px"}}>

      <div style= {{position: "absolute", top: 35, right: 35}}>
        <AiOutlineClose onClick={onClose} size ={25}/>

        {/* 내가 아직 친구가 아닌 사용자들 추천 */}
        </div>
        <h3 style={{textAlign: "center", fontSize:"45px", fontFamily: "neurimboGothicRegular",
          marginTop: "10px", marginBottom: "100px", padding: "30px"
        }}>사용자 검색</h3>

        <hr style={{border: "3px solid #666666", width: "100%", marginBottom: "20px"}}></hr>
   
       <div style={{alignItems: "center", alignContent: "center"}}>

            <div className='searchBox'>

            <input type="text"
              placeholder='사용자를 검색해보세요'
              ref={inputRef}
              className='searchInput'
        />


<SlActionRedo onClick={onSearch} id='search-Btn'
 size={30} style={{marginTop: "15px"}}/>

        </div>

         
          <div style = {{borderRadius: "30px", background: "#AC7D88",
           padding: "10px", width: "550px", height: "100px", marginTop: "20px",
            border: "3px solid #EEF7FF", display: "flex", justifyContent: "space-between", alignItems: "center"}}>

            <h5 style ={{color:"#EDE4E0", fontSize: "23px", marginLeft: "100px"}}> 뉴진스 </h5>
            <AiTwotonePlusSquare size = {30} style ={{marginRight: "25px"}} />
          </div>

          <div style = {{borderRadius: "30px", background: "#AC7D88", 
          padding: "10px", width: "550px", height: "100px", marginTop: "20px", 
          border: "3px solid #EEF7FF", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h5 style={{color: "#EDE4E0",  fontSize: "23px", marginLeft: "100px"}}> 에스파 </h5>
            <AiTwotonePlusSquare size = {30} style ={{marginRight: "25px"}} />

          </div>

          <div style = {{borderRadius: "30px", background: "#AC7D88", padding: "10px",
           width: "550px", height: "100px", marginTop: "20px", border: "3px solid #EEF7FF", 
           display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h5 style={{color: "#EDE4E0",  fontSize: "23px", marginLeft: "100px"}}> 르세라핌 </h5>
            <AiTwotonePlusSquare size = {30} style ={{marginRight: "25px"}} />

          </div>

          </div>
    

      
    </div>
  </div>
);
};



const RankingPopup = ({onClose}) => {
  return (
    <div
    style ={{position: "fixed", top: 0 , left: 0, right: 0, bottom: 0,
    padding: "30px", display: "flex", alignItems: "center", justifyContent: "right",
     zIndex: 800}}>
  
      <div style = {{
        position: "relative", background: "#96B6C5", padding: "40px 120px",  marginBottom: "5px", marginRight: "10px",
        animation: "dropTop 0.5s linear",
        width: "800px", height: "980px", overflowT: "scroll", borderRadius: "50px"}}>
  
        <div style= {{position: "absolute", top: 35, right: 35}}>
          <AiOutlineClose onClick={onClose} size ={25}/>
  
          {/* 내가 아직 친구가 아닌 사용자들 추천 */}
          </div>
          <h3 style={{textAlign: "center", fontSize:"45px", fontFamily: "neurimboGothicRegular",
            marginTop: "10px", marginBottom: "100px", padding: "30px"
          }}>전체 사용자 랭킹</h3>
  
          <hr style={{border: "3px solid #666666", width: "100%", marginBottom: "20px"}}></hr>
     
       <div style={{alignItems: "center", alignContent: "center"}}>
  
            <div style = {{borderRadius: "30px", background: "#AC7D88",
             padding: "10px", width: "550px", height: "100px", marginTop: "20px",
              border: "3px solid #EEF7FF", display: "flex", alignItems: "center"}}>
              <div style = {{width: "55px", height: "55px", border: "3px solid #fff", borderRadius: "50px", marginLeft: "20px", display:"flex", justifyContent: "center", alignItems: "center"}}>
                <h5 style ={{display:"flex", fontSize: "25px",fontWeight: 700, justifyContent: "center", alignItems: "center", marginTop: "5px"}}>1</h5>
              </div>
              <h5 style ={{color:"#EDE4E0", fontSize: "23px", marginLeft: "50px"}}> 에스파 </h5>

            </div>
  
            <div style = {{borderRadius: "30px", background: "#AC7D88",
             padding: "10px", width: "550px", height: "100px", marginTop: "20px",
              border: "3px solid #EEF7FF", display: "flex", alignItems: "center"}}>
              <div style = {{width: "55px", height: "55px", border: "3px solid #fff", borderRadius: "50px", marginLeft: "20px", display:"flex", justifyContent: "center", alignItems: "center"}}>
                <h5 style ={{display:"flex", fontSize: "25px",fontWeight: 700, justifyContent: "center", alignItems: "center", marginTop: "5px"}}>2</h5>
              </div>
              <h5 style ={{color:"#EDE4E0", fontSize: "23px", marginLeft: "50px"}}> 뉴진스 </h5>

            </div>
  
        
          
            <div style = {{borderRadius: "30px", background: "#AC7D88",
             padding: "10px", width: "550px", height: "100px", marginTop: "20px",
              border: "3px solid #EEF7FF", display: "flex", alignItems: "center"}}>
              <div style = {{width: "55px", height: "55px", border: "3px solid #fff", borderRadius: "50px", marginLeft: "20px", display:"flex", justifyContent: "center", alignItems: "center"}}>
                <h5 style ={{display:"flex", fontSize: "25px",fontWeight: 700, justifyContent: "center", alignItems: "center", marginTop: "5px"}}>3</h5>
              </div>
              <h5 style ={{color:"#EDE4E0", fontSize: "23px", marginLeft: "50px"}}> 르세라핌 </h5>

            </div>
  
            </div>
  
            </div>
          
      </div>

  );
  };

export const User_Zone = ({onClose}) => {

  const [isFriendPopupOpen, setIsFriendPopupOpen] = useState(false);
  const [isRequestPopupOpen, setIsRequestPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isRankingPopupOpen, setIsRankingPopupOpen] = useState(false);

  const handleFriendClick = () => {
      setIsFriendPopupOpen(true);
  };

  const handleFriendPopupClose = () => {
      setIsFriendPopupOpen(false);
  };

  const handleRequestClick=() => {
    setIsRequestPopupOpen(true);
  };

  const handleRequestPopupClose=()=> {
    setIsRequestPopupOpen(false);
  };

  const handleEditClick=() => {
    setIsEditPopupOpen(true);
  }

  const handleEditPopupClose= () => {
    setIsEditPopupOpen(false);
  } 

  const handleRankingClick = () => {
    setIsRankingPopupOpen(true);
  }
  const handleRankingPopupClose= () => {
    setIsRankingPopupOpen(false);
  } 




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

{isFriendPopupOpen && <FriendPopup onClose={handleFriendPopupClose} />}
{isRequestPopupOpen && <RequestPopup onClose={handleRequestPopupClose} />}
{isEditPopupOpen && <EditPopup onClose={handleEditPopupClose}></EditPopup>}
{isRankingPopupOpen && <RankingPopup onClose={handleRankingPopupClose}></RankingPopup>}

  <div 
    style = {{
      position: "relative",
      background: "#E0FBE2", // 팝업창 자체의 색상 
      borderRadius: "165px",
      padding: "120px 170px",
      animation: "dropTop 0.3s linear",
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
                    <div style={{display:"flex", marginLeft: "880px ",  marginTop: "10px", justifyContent: "center", alignContent: "center", padding:"10px", width: "215px", height: "65px", border: "3px solid #EEF7FF",
                    borderRadius: "100px", background: "#999999",  boxShadow: "0 3px 6px rgba(0,0,0,0.4)"}}
                    onClick={handleEditClick}>
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

                  <div style = {{display:"flex",  marginLeft:"-20px", marginTop: "10px", justifyContent: "center" , alignContent: "center", padding:"10px", width: "200px", height: "65px", border: "3px solid #EEF7FF", borderRadius: "100px", background: "#F1E5D1",  boxShadow: "0 3px 6px rgba(0,0,0,0.4)"}}
                  onClick={handleFriendClick}>

                    {/*  동적으로 팔로잉 할당 */}
                    <p style={{color:"#000", fontFamily:"neurimboGothicRegular", fontSize: "20px"}}> 나의 친구</p>
               

                  </div>

                  <div style={{display:"flex", marginLeft: "30px ",
                    marginTop: "10px", justifyContent: "center", alignContent: "center",
                     padding:"10px", width: "200px", height: "65px", border: "3px solid #EEF7FF", 
                     borderRadius: "100px", background: "#F1E5D1",  boxShadow: "0 3px 6px rgba(0,0,0,0.4)"}}
                  onClick={handleRequestClick}>
                    {/*  동적으로 팔로워 할당  */}
                    <p style={{color: "#000",  fontFamily:"neurimboGothicRegular",  fontSize: "20px"}} >친구 요청</p>
                  </div>
                  </div>
                
                </div>
      </div>

    <div style={{display:"flex",width: "100%", marginTop: "20px"}}>

      <div style={{ flex: 1, // 부모 요소의 너비를 1/3으로 사용
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center", display:"flex", marginLeft: "30px ",  marginTop: "20px", justifyContent: "center", alignContent: "center", padding:"10px", width: "90%", height: "65px", border: "3px solid #EEF7FF", borderRadius: "100px", background: "#F1E5D1",  boxShadow: "0 3px 6px rgba(0,0,0,0.4)"}}>
        <h3 style={{color:"#000", fontFamily: "establishRetrosansOTF", fontSize: "23px", marginTop: "7px"}}> 카테고리 별 점수 </h3>
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
              marginLeft: "30px",
              
              padding: "40px",
              width: "90%",
              height: "250px",
              border: "3px solid #EEF7FF",
              borderRadius: "50px",
              background: "#E9EDC9",
              boxShadow: "0 3px 6px rgba(0,0,0,0.6)",
              overflowY: "auto"
            }}
          >
                            {/* 동적으로 맞은 문제 할당 */}
              <div style={{marginTop: "10px", display: "flex",  justifyContent: "space-between", width: "100%"}}>
              <h5 style={{ marginLeft: "80px", fontWeight: 700, display: "flex", fontSize: "22px"}}> 동물 </h5>
              <h5 style={{  fontWeight: 700, display: "flex",fontSize: "20px"}}> 스포츠 </h5>
              <h5 style={{  marginRight: "80px", fontWeight: 700, display: "flex", fontSize: "22px"}}> 음식 </h5>
              </div>
              
              <hr style={{width: "100%", border: "3px solid #666666", marginTop: "20px"}}></hr>
      

              <div style={{display:"flex", marginTop:"30px", width: "100%", justifyContent:"space-between"}}>

                <div style={{padding:"10px", width: "30%", height: "100%", border: "3px solid #EEF7FF", borderRadius: "50px", background: "#CDE8E5",boxShadow: "0 3px 6px rgba(0,0,0,0.6)", display: "flex", justifyContent: "center" }}>
                  <h3> 13</h3>
                </div>
                <div style={{padding:"10px",  width: "30%", height: "100%", border: "3px solid #EEF7FF", borderRadius: "50px", background: "#CDE8E5",boxShadow: "0 3px 6px rgba(0,0,0,0.6)", display: "flex", justifyContent: "center" }}>
                  <h3> 8</h3>
                </div>
                <div style={{padding:"10px", width: "30%", height: "100%", border: "3px solid #EEF7FF", borderRadius: "50px", background: "#CDE8E5",boxShadow: "0 3px 6px rgba(0,0,0,0.6)", display: "flex", justifyContent: "center" }}>
                  <h3> 30 </h3>
                </div>
                
              </div>
              </div>

              <div 
              
            style={{
              flex: 1,
              marginLeft: "30px",
              padding: "40px",
              width: "90%",
              height: "250px",
              border: "3px solid #EEF7FF",
              borderRadius: "50px",
              background: "#E9EDC9",
              boxShadow: "0 3px 6px rgba(0,0,0,0.6)",
              overflowY: "auto"
            }}
          >                {/* 동적으로 사용자별 랭킹 조정 */}
         
          <div style = {{display: "flex",  marginLeft: "300px", marginTop: "-5px", justifyContent: 'center',
           alignItems: 'center', width: "78px", height: "78px", border: "8px solid #4D869C", borderRadius: "50px" }}>
          <h5 style={{ color: "#217346", fontWeight: 800, fontSize: "25px", marginTop: "6px", marginRight: "3px"}}> 13 </h5>
          </div>

          <hr style ={{width: "100%", border: "2px solid #666666", marginTop: "25px"}}></hr>
          <div style = {{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "28px"}}> 
          <h5 style = {{fontSize: "20px", fontWeight: 700}} > 전체 랭킹 확인하러 가기</h5>
          <SlArrowRightCircle size="25px" style = {{marginLeft: "10px", marginBottom: "7px"}} onClick={handleRankingClick}/>
          </div>

          </div>
    </div>

      </div>
    </div>

    );
};