import './App.css';
import { ScrollControls, Scroll ,Environment, Float, Sparkles, PositionalAudio} from '@react-three/drei';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Butterfly } from './models/Butterfly';
import {Flower} from './models/Flower';
import {Flower_2} from './models/Flower_2';
import {Flower_4} from './models/Flower_4'

import { Butterfly_2 } from './models/Butterfly_2';
import { Bloom, DepthOfField, EffectComposer,Vignette } from '@react-three/postprocessing';
import sound_1 from './sounds/sound_1.mp3'
import sound_2 from './sounds/sound_2.mp3'
import sound_3 from './sounds/sound_3.mp3'

function App() {
  return (

  <>
  
    <color attach = 'background' args= {['#273347']} />
    <ambientLight intensity = {0.2}/>
    <spotLight position = {[0,25,0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001}/>
    <Environment preset='warehouse'/>
    
    
    <EffectComposer>
      <Bloom intensity={0.7} luminanceThreshold={0.2} luminanceSmoothing={0.9} height={1000}/> 
      <DepthOfField focusDistance={0} focalLength={0.02} bokeScale={5} height = {480} />
      <Vignette eskil={false} offset={.1} darkness={0.8}/>
    
    </EffectComposer>


    <ScrollControls pages = {6} damping={0.25}>
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
        
          <Flower_4 scale = {0.3} position = {[6,-3.5,-1.5]}/>
          <Flower_4 scale = {0.4} position = {[-4,-11,-0.4]}/>
          <Flower_4 scale = {0.25} position = {[-4,-3.6,-0.85]}/>
          
          <Butterfly scale = {0.25} position = {[-13,-5.6,-0.85]}/>
          </Float>

          <Sparkles noise = {0} count={500} speed={0.01} size = {0.6} color = {"#ffd2be"} opacity={10} scale={[20,100,20]}></Sparkles>
          <Sparkles noise = {0} count={50} speed={0.01} size = {1} color = {"#fff"} opacity={20} scale={[20,100,10]}></Sparkles>
              
    
  

          </Scroll>

      <Scroll html style = {{width :'100%'}}>

        
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
          <Row className ='text-center align-items-center justify-content-center' style = {{color:'#fff', position:'absolute', width:'115vw', height:'100vh',padding:'0px 10px 0px', top: '90vh'}}>
            <Col xs={10}>
              <div>
                <h1 style={{marginBottom: '0px'}}> 수화 </h1>
              </div>
            </Col>
          </Row>
        </Container>

        <Container style={{position: 'relative'}}>
        <Row className ='text-center align-items-center justify-content-center' style = {{color:'#fff', position:'absolute', width:'90vw', height:'360vh',padding:'0px 30px 0px', top: '85vh'}}>
        <Col xs={10}>
        <div class = "button-container">
          <span class="mas">SLANG으로 이동하기</span>
        <button id='work' type="button" name="Hover">SLANG으로 이동하기</button>
      </div>   
      </Col>
      </Row>
      </Container>
      </Scroll>


    </ScrollControls>
  </>
  );
}

export default App;
