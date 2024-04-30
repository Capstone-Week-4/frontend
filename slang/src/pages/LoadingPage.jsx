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
import sound_1 from '../sounds/sound_1.mp3'
import sound_2 from '../sounds/sound_2.mp3'
import sound_3 from '../sounds/sound_3.mp3'
import logo from '../flower_logo4.png'
import { useNavigate } from 'react-router-dom';

function LoadingPage() {


  const navigate = useNavigate();
  
  const goingpage = () => {
    setTimeout(() => {
      navigate("/going");
    }, 1800);
  }
  
  return (

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


    <ScrollControls pages = {6} damping={0.2}>
      <group position = {[0,0,0]}>
          <PositionalAudio autoplay loop url={sound_1} distance = {1.2} />
              
            </group>

            <group position = {[0,-30,0]}>
          <PositionalAudio autoplay loop url={sound_2} distance = {2} />
            </group>
                

          <group position = {[0,-60,0]}>
            <PositionalAudio autoplay loop url={sound_3} distance = {1.2}/>
          </group>
        <Scroll>

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

    
          </Scroll>

          
          <Scroll>
  
          <Butterfly scale = {0.01}  rotation-x={Math.PI*0.3} rotation-y={Math.PI*0.21} position = {[-3,-13.8,-1]}/>
          <Butterfly scale = {0.018}  rotation-x={Math.PI*0.2} rotation-y={Math.PI*0.21} position = {[-3.8,-12.9,-1]}/>
          <Butterfly scale = {0.015}  rotation-x={Math.PI*0.12}  rotation-y={Math.PI*0.13} rotation-z={Math.PI*0.14} position = {[6.8,-9.8,-2]}/>
          <Butterfly scale = {0.009} rotation-z={Math.PI*0.9178} rotation-y={Math.PI*2.8} rotation-x={Math.PI*3.374} position = {[6.823,1.66313,-2]}/>
          <Butterfly scale = {0.022} rotation-z={Math.PI*0.9278} rotation-y={Math.PI*2.8} rotation-x={Math.PI*3.344} position = {[5.3,1.8,-2]}/>

  
          </Scroll>


      <Scroll html style = {{width :'100%'}}>

      <header className = "App-header">
        <img src={logo} alt="alt here" style = {{ width: '150px', height: '150px' }} />

        </header>

        <Container style={{position: 'relative'}}>
          <Row className ='text-center align-items-center justify-content-center' style = {{color: '#fff', position:'absolute', width:'90vw', height:'100vh',padding:'0px 20px 0px', right:'40px'}}>
            <Col xs={10}>
              <div>
                <h1 style={{marginBottom: '0px'}}> 손으로 피우는 꽃,</h1>
              </div>
            </Col>
          </Row>
          </Container>
          <Container style={{position: 'relative'}}>
          <Row className ='text-center align-items-center justify-content-center' style = {{color:'#fff', position:'absolute', width:'115vw', height:'130vh',padding:'0px 10px 0px', top: '75vh'}}>
            <Col xs={10}>
              <div>
                <h1 style={{marginBottom: '0px'}}> 수화 </h1>
              </div>
            </Col>
          </Row>
        </Container>

        <Container style={{position: 'relative'}}>
        <Row className ='text-center align-items-center justify-content-center' style = {{color:'#fff', position:'absolute', width:'70vw', height:'385vh',padding:'0px 30px 0px', top: '40vh'}}>
        <Col xs={10}>
        <div class = "button-container">
          <span class="mas">SLANG으로 이동하기</span>
        <button id='work' type="button" name="Hover" onClick={goingpage}>SLANG으로 이동하기</button>
      </div>   
      </Col>
      </Row>
      </Container>
      </Scroll>


    </ScrollControls>
  </Canvas>
  );
}

export default LoadingPage;
