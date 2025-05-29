import * as THREE from 'three';


const HeroLights = () =>{
    return(
        <>
            <ambientLight intensity={0.2} color = "#1a1a40" />
            <directionalLight position={[5,5,5]} intensity={3} />
            <spotLight 
            position={[0,3,1]}
            angle={0.5}
            intensity={80}
            penumbra={0.5}
            color="white"
            />

           <spotLight 
                position={[5, 10, 5]}
                angle={0.3}
                intensity={80}
                penumbra={0.5}
                color="white"
            /> 

            <spotLight
                position={[0, 5, -5]}
                angle={0.4}
                intensity={60}
                penumbra={0.2}
                color="white"
            /> 
            <spotLight
                position={[-5, 7, 5]}
                angle={0.3}
                intensity={70}
                penumbra={0.3}
                color="white"
            /> 

            <spotLight
                position={[2, 3, -5]}
                angle={0.3}
                intensity={50}
                penumbra={0.5}
                color="white"
            />

            <primitive
            object={new THREE.RectAreaLight('#A259FF', 8 , 3, 2)}
            position = {[0,1,0]}
            intensity = {15}
            rotation = {[-Math.PI / 4, Math.PI / 4, 0]}
            />

            <pointLight 
            position={[0,1,0]} 
            intensity={10} 
            color='#7209b7'
            />

            <pointLight 
            position={[1,2,-2]} 
            intensity={10} 
            color='#7209b7'
            />
        </>

    )
}
export default HeroLights