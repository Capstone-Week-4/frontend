import React, { useState } from 'react';
import '../App.css';
import { ScrollControls, Scroll ,Environment, Float, Sparkles, PositionalAudio} from '@react-three/drei';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Butterfly } from '../models/Butterfly';
import {Flower} from '../models/Flower';
import {Flower_2} from '../models/Flower_2';
import {Flower_4} from '../models/Flower_4'
import { Canvas } from '@react-three/fiber'
import { Bloom, DepthOfField, EffectComposer,Vignette } from '@react-three/postprocessing';
import logo from '../flower_logo4.png'
import { useNavigate } from 'react-router-dom';
import '../static/login.css'
function LoginPage() {

    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  async function sendLoginInfo(userId, password) {
    const url = '/api/login'; // Replace with your backend URL
    const data = {
      id: userId,
      password: password
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      console.log('Server response:', responseData);
      return responseData;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
  
  async function sendSignupInfo(userId, username, password) {
    const url = '/api/register'; // Replace with your backend URL
    const data = {
        id: userId,
        password: password,
        name: username,

    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      console.log('Server response:', responseData);
      return responseData;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
  
  
const handleLogin = (e) => {
    e.preventDefault()
    // sendLoginInfo(userId, username, password)
    //   .then(response => {
    //     // Handle successful login response
    //     console.log('Login successful:', response);
    //     // Redirect to another page or update UI accordingly
    //   })
    //   .catch(error => {
    //     // Handle login error
    //     console.error('Login failed:', error);
    //     // Update UI to show login error message
    //   });
      navigate('/landing');

  };
  const handleSignup = (e) => {
    e.preventDefault()
    sendSignupInfo(userId, username, password)
      .then(response => {
        // Handle successful login response
        console.log('Sign up successful:', response);
        // Redirect to another page or update UI accordingly
      })
      .catch(error => {
        // Handle login error
        console.error('Sign up failed:', error);
        // Update UI to show login error message
      });
  };
  
  return (
<>
  <Canvas>
  
    <color attach = 'background' args= {['#273347']} />
    <ambientLight intensity = {0.2}/>
    <spotLight position = {[0,25,0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001}/>
    <Environment preset='warehouse'/>
    
    
    <EffectComposer>
      <Bloom intensity={0.7} luminanceThreshold={0.2} luminanceSmoothing={0.9} height={1000}/> 
      <DepthOfField focusDistance={0} focalLength={0.02} bokeScale={5} height = {480} />
      <Vignette eskil={false} offset={.1} darkness={0.8}/>
    
    </EffectComposer>



        {/* <Scroll> */}

          {/* TOP*/}

          <Float
            speed = {1} // 애니메이션의 속도. default가 1
            rotationIntensity={0.4} // xyz rotation intensity, default가 1
            floatIntensity={0.2} // up/down float intensity, floatingRange를 가지면 multiplier처럼 작동한다.  
            floatingRange={[1,1]} // object가 float 하는 y축값의 범위
            >

          <Flower scale = {0.4} position = {[6,-2.5,-1]}/>
          <Flower scale = {0.4} position = {[7,-2,-0.5]}/>
          <Flower scale = {0.7} position = {[3.8,-4.7,-1.2]}/>
          <Flower scale = {0.5} position = {[-4,-2.5,0]}/>
          <Flower scale = {0.6} position = {[-10,-10,-0.4]}/>
          <Flower scale = {2} position = {[-6,-10,-0.4]}/>
          <Flower scale = {0.6} position = {[-8,-4,-1]}/>
          <Flower scale = {0.46} position = {[-8,-2,-0.4]}/>

          <Flower_2 scale = {0.65} position = {[6.8,-4.8,-2.2]}/>
            <Flower_2 scale = {0.48} position = {[5.8,-6.1,-2.2]}/>
            <Flower_2 scale = {0.59} position = {[3.8,-5.8,-2.2]}/>
            <Flower_2 scale = {0.53} position = {[7.8,-5.8,-2.2]}/>
            <Flower_2 scale = {0.54} position = {[9.2,-6.1,-2.3]}/>
            <Flower_2 scale = {0.38} position = {[10.2,-5,-2.6]}/>
            <Flower_2 scale = {0.43} position = {[7.8,-7.4,-2.6]}/>
  
            <Flower_2 scale = {0.48} position = {[11.2,-4.4,-3.8]}/>
            <Flower_2 scale = {0.48} position = {[12.2,-3.4,-3.8]}/>
            <Flower_2 scale = {0.53} position = {[13.2,-4.8,-3.8]}/>
            <Flower_2 scale = {0.57} position = {[14.2,-6.3,-3.8]}/>
            <Flower_2 scale = {0.57} position = {[12.7,-2.3,-2.8]}/>
            <Flower_2 scale = {0.47} position = {[10.7,-1.3,-2.8]}/>
            <Flower_2 scale = {0.69} position = {[9.8,-2.3,-4]}/>
            <Flower_2 scale = {0.63} position = {[14.8,-4,-4]}/>
            <Flower_2 scale = {0.43} position = {[13.8,-7.7,-4]}/>
            <Flower_2 scale = {0.67} position = {[5.3,-4.7,-4]}/>
            <Flower_2 scale = {0.67} position = {[15.3,-4.7,-4]}/>
  
  
            <Flower_2 scale = {0.87} position = {[-15.3,-8.2,-4]}/>
            <Flower_2 scale = {0.87} position = {[-14.3,-8.6,-4]}/>
            <Flower_2 scale = {0.57} position = {[-12.3,-5.3,-4]}/>
            <Flower_2 scale = {0.62} position = {[-15.3,-9.3,-4]}/>
            <Flower_2 scale = {0.52} position = {[-11.3,-7.5,-4]}/>
            <Flower_2 scale = {0.52} position = {[-15.3,-5,-4]}/>
            <Flower_2 scale = {0.62} position = {[-15.8,-9.8,-4]}/>
            <Flower_2 scale = {0.53} position = {[-9.8,-6.3,-4]}/>
            <Flower_2 scale = {0.53} position = {[-9.8,-7.9,-4]}/>
  
  
        
          <Flower_4 scale = {0.3} position = {[6,-3.5,-1.5]}/>
          <Flower_4 scale = {0.4} position = {[-4,-11,-0.4]}/>
          <Flower_4 scale = {0.25} position = {[-4,-3.6,-0.85]}/>
          
          </Float>

          <Sparkles noise = {0} count={500} speed={0.01} size = {0.2} color = {"#ffd2be"} opacity={10} scale={[-20,100,20]}></Sparkles>
          <Sparkles noise = {0} count={50} speed={0.01} size = {0.1} color = {"#fff"} opacity={20} scale={[20,100,10]}></Sparkles>
          <Sparkles noise = {0} count={600} speed={0.01} size = {0.3} color = {"#fff"} opacity={20} scale={[-10,100,10]}></Sparkles>

    
          {/* </Scroll> */}

{/*           
          <Scroll> */}
  
          <Butterfly scale = {0.01}  rotation-x={Math.PI*0.3} rotation-y={Math.PI*0.21} position = {[-4.9,-18.3,-1]}/>
          <Butterfly scale = {0.018}  rotation-x={Math.PI*0.2} rotation-y={Math.PI*0.21} position = {[-3.9,-16.3,-1]}/>
          <Butterfly scale = {0.015}  rotation-x={Math.PI*0.12}  rotation-y={Math.PI*0.13} rotation-z={Math.PI*0.14} position = {[5.9,-10.2,-2]}/>
          <Butterfly scale = {0.009} rotation-z={Math.PI*0.9178} rotation-y={Math.PI*2.8} rotation-x={Math.PI*3.374} position = {[6.823,1.66313,-2]}/>
          <Butterfly scale = {0.022} rotation-z={Math.PI*0.9278} rotation-y={Math.PI*2.8} rotation-x={Math.PI*3.344} position = {[5.3,1.8,-2]}/>

  
          {/* </Scroll> */}




  </Canvas>

  
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Row className="text-center align-items-center justify-content-center" style={{ color: '#fff', width: '100%', height: '100%', padding: '0px 30px 0px' }}>
        <Col xs={10}>
            <header className="App-header">
            {/* <img src={logo} alt="alt here" style={{ width: '150px', height: '150px' }} /> */}
            </header>
            {/* <div className="button-container">
            {/* <span className="mas">로그인</span> 
                <button id="login_btn" type="button" name="Hover">로그인</button>
                <button id="signup_btn" type="button" name="Hover">회원가입</button>

            </div> */}
           <body>
  <div className='main'>
    <input type='checkbox' id='chk' aria-hidden="true" />
    <div className='signup'>
      <form>
        <label htmlFor="chk" aria-hidden="true">회원가입</label>
        <input type='text' name='txt' placeholder="아이디" required=""
         value={userId}
         onChange={e => setUserId(e.target.value)}/>
        <input type='text' name='txt' placeholder="이름" required="" 
         value={username}
         onChange={e => setUsername(e.target.value)}/>
        <input type='password' name='pswd' placeholder='비밀번호' required=""
         value={password}
         onChange={e => setPassword(e.target.value)} />
        <button onClick={(e) => handleSignup(e)}>회원가입</button>
      </form>
    </div>
    <div className="login">
				<form>
					<label for="chk" aria-hidden="true">로그인</label>
                    <input type='text' name='txt' placeholder="아이디" required="" />
					<input type="password" name="pswd" placeholder="비밀번호" required="" />
					<button onClick={(e) => handleLogin(e)}>로그인</button>
				</form>
			</div>
  </div>
</body>
            
            
        </Col>
        </Row>
        </Container>
</>
  );
}

export default LoginPage;
